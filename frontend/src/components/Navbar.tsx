'use client';

import { useState } from 'react';
import { useSaaS } from './SaaSProvider';
import { User, LogOut, CreditCard, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenCheckout: () => void;
}

export default function Navbar({ onOpenAuth, onOpenCheckout }: NavbarProps) {
  const { user, plan, generationsUsed, generationsLimit, logout } = useSaaS();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      width: '100%',
      background: 'rgba(2, 6, 23, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      height: '64px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container flex items-center justify-between" style={{ width: '100%' }}>
        <div className="flex items-center gap-2" style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary), #a855f7)',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
          }}>
            F
          </div>
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: 700, 
            background: 'linear-gradient(to right, var(--foreground), #a855f7)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.025em'
          }}>
            Flyterial
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Quota display for Free tier */}
              {plan === 'free' ? (
                <div 
                  className="flex items-center gap-2" 
                  style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.35rem 0.75rem', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    borderRadius: '99px',
                    border: '1px solid var(--border)'
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>Usage:</span>
                  <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>
                    {generationsUsed} / {generationsLimit}
                  </span>
                </div>
              ) : (
                <div 
                  className="flex items-center gap-1.5" 
                  style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.35rem 0.75rem', 
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(99, 102, 241, 0.15))', 
                    borderRadius: '99px',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    color: '#c084fc',
                    fontWeight: 600
                  }}
                >
                  <Sparkles size={13} />
                  PRO Plan
                </div>
              )}

              {/* Upgrade Button */}
              {plan === 'free' && (
                <button 
                  onClick={onOpenCheckout}
                  className="btn btn-primary"
                  style={{ 
                    padding: '0.4rem 1rem', 
                    fontSize: '0.85rem', 
                    borderRadius: 'var(--radius)',
                    background: 'linear-gradient(to right, var(--primary), #a855f7)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <Sparkles size={14} />
                  Upgrade
                </button>
              )}

              {/* User Dropdown Trigger */}
              <div style={{ position: 'relative' }}>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--foreground)',
                    transition: 'all 0.2s'
                  }}
                >
                  <User size={18} />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <>
                    <div 
                      onClick={() => setDropdownOpen(false)} 
                      style={{ position: 'fixed', inset: 0, zIndex: 40 }}
                    />
                    <div style={{
                      position: 'absolute',
                      right: 0,
                      marginTop: '0.5rem',
                      width: '240px',
                      background: '#0b0f19',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                      padding: '0.5rem',
                      zIndex: 50,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem'
                    }}>
                      <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border)', marginBottom: '0.25rem' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Signed in as</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--foreground)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {user.email}
                        </p>
                      </div>

                      {plan === 'free' && (
                        <button 
                          onClick={() => {
                            setDropdownOpen(false);
                            onOpenCheckout();
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            width: '100%',
                            padding: '0.6rem 0.75rem',
                            border: 'none',
                            background: 'transparent',
                            borderRadius: '8px',
                            color: 'var(--foreground)',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '0.875rem'
                          }}
                          className="dropdown-item-hover"
                        >
                          <CreditCard size={16} color="var(--primary)" />
                          Billing / Upgrade
                        </button>
                      )}

                      <button 
                        onClick={() => {
                          setDropdownOpen(false);
                          logout();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          width: '100%',
                          padding: '0.6rem 0.75rem',
                          border: 'none',
                          background: 'transparent',
                          borderRadius: '8px',
                          color: '#ef4444',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontSize: '0.875rem'
                        }}
                        className="dropdown-item-hover"
                      >
                        <LogOut size={16} />
                        Log out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onOpenAuth('login')} 
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  color: 'var(--foreground)', 
                  cursor: 'pointer', 
                  fontSize: '0.95rem',
                  fontWeight: 500
                }}
              >
                Log in
              </button>
              <button 
                onClick={() => onOpenAuth('register')} 
                className="btn btn-primary"
                style={{ 
                  padding: '0.5rem 1.25rem', 
                  fontSize: '0.9rem',
                  background: 'linear-gradient(to right, var(--primary), #a855f7)'
                }}
              >
                Get Started
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
