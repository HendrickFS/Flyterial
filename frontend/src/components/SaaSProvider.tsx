'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export interface Document {
  title: string;
  content: string;
}

export interface HistoryItem {
  id: string;
  subject: string;
  level: string;
  preset: string;
  context: string;
  documents: Document[];
  date: string;
}

export interface CommunityPreset {
  id: string;
  name: string;
  level: string;
  structure: string;
  description: string;
  createdBy: string;
  createdAt: string;
}

interface User {
  email: string;
}

interface SaaSContextType {
  user: User | null;
  plan: 'free' | 'pro';
  generationsUsed: number;
  generationsLimit: number;
  history: HistoryItem[];
  presets: CommunityPreset[];
  login: (email: string, password?: string) => Promise<boolean>;
  register: (email: string, password?: string) => Promise<boolean>;
  logout: () => void;
  upgradePlan: () => Promise<boolean>;
  addGeneration: (subject: string, level: string, preset: string, context: string, documents: Document[]) => Promise<void>;
  deleteHistoryItem: (id: string) => void;
  sharePreset: (name: string, level: string, structure: string, description: string) => Promise<boolean>;
  deletePreset: (id: string) => Promise<boolean>;
  fetchPresets: () => Promise<void>;
}

const SaaSContext = createContext<SaaSContextType | undefined>(undefined);

const API_URL = 'http://localhost:5000/api';

export function SaaSProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [plan, setPlan] = useState<'free' | 'pro'>('free');
  const [generationsUsed, setGenerationsUsed] = useState<number>(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [presets, setPresets] = useState<CommunityPreset[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const generationsLimit = plan === 'pro' ? 99999 : 3;

  // Initialize and load auth token + presets
  useEffect(() => {
    const storedToken = localStorage.getItem('flyterial_token');
    if (storedToken) {
      setToken(storedToken);
      fetchProfile(storedToken);
    }
    fetchPresets();
    setMounted(true);
  }, []);

  // Sync history based on active user email
  useEffect(() => {
    if (!mounted || !user) return;
    const userHistoryKey = `flyterial_history_${user.email}`;
    const storedHistory = localStorage.getItem(userHistoryKey);
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    } else {
      setHistory([]);
    }
  }, [user, mounted]);

  // Persist history changes to localStorage
  useEffect(() => {
    if (!mounted || !user) return;
    const userHistoryKey = `flyterial_history_${user.email}`;
    localStorage.setItem(userHistoryKey, JSON.stringify(history));
  }, [history, user, mounted]);

  const fetchProfile = async (authToken: string) => {
    try {
      const res = await fetch(`${API_URL}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUser({ email: data.email });
        setPlan(data.plan);
        setGenerationsUsed(data.generationsUsed);
      } else {
        // Token expired or invalid
        logout();
      }
    } catch (err) {
      console.error('Failed to fetch profile:', err);
    }
  };

  const fetchPresets = async () => {
    try {
      const res = await fetch(`${API_URL}/presets`);
      if (res.ok) {
        const data = await res.json();
        setPresets(data);
      }
    } catch (err) {
      console.error('Failed to fetch community presets:', err);
    }
  };

  const login = async (email: string, password?: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: password || 'password123' })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        localStorage.setItem('flyterial_token', data.token);
        setUser({ email: data.user.email });
        setPlan(data.user.plan);
        setGenerationsUsed(data.user.generationsUsed);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Login error:', err);
      return false;
    }
  };

  const register = async (email: string, password?: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: password || 'password123' })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        localStorage.setItem('flyterial_token', data.token);
        setUser({ email: data.user.email });
        setPlan(data.user.plan);
        setGenerationsUsed(data.user.generationsUsed);
        setHistory([]);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Registration error:', err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setPlan('free');
    setGenerationsUsed(0);
    setHistory([]);
    setToken(null);
    localStorage.removeItem('flyterial_token');
  };

  const upgradePlan = async (): Promise<boolean> => {
    if (!token) return false;
    try {
      const res = await fetch(`${API_URL}/users/upgrade`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setPlan(data.plan);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Upgrade plan error:', err);
      return false;
    }
  };

  const addGeneration = async (subject: string, level: string, preset: string, context: string, documents: Document[]) => {
    // Save locally
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      subject,
      level,
      preset,
      context,
      documents,
      date: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setHistory(prev => [newItem, ...prev]);

    // Save/increment on the server
    if (token) {
      try {
        const res = await fetch(`${API_URL}/users/increment-usage`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setGenerationsUsed(data.generationsUsed);
        }
      } catch (err) {
        console.error('Increment usage error:', err);
      }
    }
  };

  const deleteHistoryItem = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const sharePreset = async (name: string, level: string, structure: string, description: string): Promise<boolean> => {
    if (!token) return false;
    try {
      const res = await fetch(`${API_URL}/presets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, level, structure, description })
      });
      if (res.ok) {
        fetchPresets(); // Refresh lists
        return true;
      }
      return false;
    } catch (err) {
      console.error('Share preset error:', err);
      return false;
    }
  };

  const deletePreset = async (id: string): Promise<boolean> => {
    if (!token) return false;
    try {
      const res = await fetch(`${API_URL}/presets/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        fetchPresets(); // Refresh lists
        return true;
      }
      return false;
    } catch (err) {
      console.error('Delete preset error:', err);
      return false;
    }
  };

  return (
    <SaaSContext.Provider value={{
      user,
      plan,
      generationsUsed,
      generationsLimit,
      history,
      presets,
      login,
      register,
      logout,
      upgradePlan,
      addGeneration,
      deleteHistoryItem,
      sharePreset,
      deletePreset,
      fetchPresets
    }}>
      {children}
    </SaaSContext.Provider>
  );
}

export function useSaaS() {
  const context = useContext(SaaSContext);
  if (context === undefined) {
    throw new Error('useSaaS must be used within a SaaSProvider');
  }
  return context;
}
