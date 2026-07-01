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

interface User {
  email: string;
}

interface SaaSContextType {
  user: User | null;
  plan: 'free' | 'pro';
  generationsUsed: number;
  generationsLimit: number;
  history: HistoryItem[];
  login: (email: string) => boolean;
  register: (email: string) => boolean;
  logout: () => void;
  upgradePlan: () => void;
  addGeneration: (subject: string, level: string, preset: string, context: string, documents: Document[]) => void;
  deleteHistoryItem: (id: string) => void;
}

const SaaSContext = createContext<SaaSContextType | undefined>(undefined);

export function SaaSProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [plan, setPlan] = useState<'free' | 'pro'>('free');
  const [generationsUsed, setGenerationsUsed] = useState<number>(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [mounted, setMounted] = useState(false);

  const generationsLimit = plan === 'pro' ? 99999 : 3;

  // Load state from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('flyterial_user');
    const storedPlan = localStorage.getItem('flyterial_plan');
    const storedUsed = localStorage.getItem('flyterial_used');
    const storedHistory = localStorage.getItem('flyterial_history');

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedPlan) setPlan(storedPlan as 'free' | 'pro');
    if (storedUsed) setGenerationsUsed(parseInt(storedUsed, 10) || 0);
    if (storedHistory) setHistory(JSON.parse(storedHistory));

    setMounted(true);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!mounted) return;
    if (user) {
      localStorage.setItem('flyterial_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('flyterial_user');
    }
  }, [user, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('flyterial_plan', plan);
  }, [plan, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('flyterial_used', generationsUsed.toString());
  }, [generationsUsed, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('flyterial_history', JSON.stringify(history));
  }, [history, mounted]);

  const login = (email: string) => {
    if (!email || !email.includes('@')) return false;
    setUser({ email });
    return true;
  };

  const register = (email: string) => {
    if (!email || !email.includes('@')) return false;
    setUser({ email });
    // Reset usage for a new user
    setPlan('free');
    setGenerationsUsed(0);
    setHistory([]);
    return true;
  };

  const logout = () => {
    setUser(null);
    setPlan('free');
    setGenerationsUsed(0);
    setHistory([]);
    localStorage.removeItem('flyterial_user');
    localStorage.removeItem('flyterial_plan');
    localStorage.removeItem('flyterial_used');
    localStorage.removeItem('flyterial_history');
  };

  const upgradePlan = () => {
    setPlan('pro');
  };

  const addGeneration = (subject: string, level: string, preset: string, context: string, documents: Document[]) => {
    setGenerationsUsed(prev => prev + 1);
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
  };

  const deleteHistoryItem = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  return (
    <SaaSContext.Provider value={{
      user,
      plan,
      generationsUsed,
      generationsLimit,
      history,
      login,
      register,
      logout,
      upgradePlan,
      addGeneration,
      deleteHistoryItem
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
