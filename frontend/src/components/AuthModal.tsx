'use client';

import { useState } from 'react';
import { useSaaS } from './SaaSProvider';
import { X, Mail, Lock } from 'lucide-react';

interface AuthModalProps {
  initialMode: 'login' | 'register';
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ initialMode, onClose, onSuccess }: AuthModalProps) {
  const { login, register, t } = useSaaS();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError(t.auth.fillFieldsError);
      return;
    }

    if (mode === 'register' && password !== confirmPassword) {
      setError(t.auth.passwordMismatch);
      return;
    }

    setLoading(true);

    (async () => {
      try {
        let success = false;
        if (mode === 'login') {
          success = await login(email, password);
        } else {
          success = await register(email, password);
        }

        setLoading(false);

        if (success) {
          onSuccess();
          onClose();
        } else {
          setError(t.auth.authFailed);
        }
      } catch (err) {
        setLoading(false);
        setError(err instanceof Error ? err.message : t.auth.connectionFailed);
      }
    })();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(2, 6, 23, 0.85)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      {/* Modal Container */}
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '420px',
        padding: '2.5rem',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.1)',
        border: '1px solid var(--border)'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.25rem',
            borderRadius: '50%',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            {mode === 'login' ? t.auth.welcomeBack : t.auth.createAccount}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {mode === 'login' ? t.auth.welcomeSub : t.auth.createSub}
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: 'var(--radius)',
            padding: '0.75rem 1rem',
            color: '#f87171',
            fontSize: '0.875rem',
            marginBottom: '1.5rem'
          }}>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-col gap-4">
          <div>
            <label htmlFor="auth-email">{t.auth.emailLabel}</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                id="auth-email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" 
                style={{ paddingLeft: '2.5rem' }}
              />
              <Mail size={16} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} />
            </div>
          </div>

          <div>
            <label htmlFor="auth-password">{t.auth.passwordLabel}</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password" 
                id="auth-password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••" 
                style={{ paddingLeft: '2.5rem' }}
              />
              <Lock size={16} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label htmlFor="auth-confirm">{t.auth.confirmPasswordLabel}</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="password" 
                  id="auth-confirm" 
                  required
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="••••••••" 
                  style={{ paddingLeft: '2.5rem' }}
                />
                <Lock size={16} style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)'
                }} />
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary w-full" 
            style={{ 
              marginTop: '1rem', 
              fontSize: '1rem', 
              padding: '0.85rem',
              background: 'linear-gradient(to right, var(--primary), #a855f7)'
            }} 
            disabled={loading}
          >
            {loading ? t.common.processing : mode === 'login' ? t.auth.loginBtn : t.auth.signupBtn}
          </button>
        </form>

        {/* Mode Toggle */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>
            {mode === 'login' ? t.auth.dontHaveAccount : t.auth.alreadyAccount}
          </span>
          <button 
            onClick={() => {
              setMode(mode === 'login' ? 'register' : 'login');
              setError('');
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0
            }}
          >
            {mode === 'login' ? t.auth.signupLink : t.auth.loginLink}
          </button>
        </div>
      </div>
    </div>
  );
}
