'use client';

import { useState } from 'react';
import { useSaaS } from './SaaSProvider';
import { X, CreditCard, Calendar, Lock, CheckCircle2 } from 'lucide-react';

interface CheckoutModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CheckoutModal({ onClose, onSuccess }: CheckoutModalProps) {
  const { upgradePlan } = useSaaS();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpiry(formatExpiry(e.target.value));
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment authorization delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      upgradePlan();
      onSuccess?.();
    }, 1800);
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
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '460px',
        padding: '2.5rem',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.1)',
        border: '1px solid rgba(168, 85, 247, 0.2)'
      }}>
        {/* Close Button */}
        {!loading && (
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
        )}

        {success ? (
          /* Payment Success View */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={64} color="#10b981" style={{ animation: 'pulse 2s infinite' }} />
            </div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#10b981' }}>Payment Successful!</h2>
            <p style={{ color: 'var(--foreground)', fontWeight: 500, marginBottom: '0.5rem' }}>You are now a PRO Educator</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Your quota has been upgraded to **Unlimited**. You now have access to all structures, full modules, and comprehensive study guides!
            </p>
            <button 
              onClick={onClose}
              className="btn btn-primary w-full"
              style={{
                background: 'linear-gradient(to right, #10b981, #059669)',
                padding: '0.85rem',
                fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
              }}
            >
              Start Generating
            </button>
          </div>
        ) : (
          /* Payment Form View */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Upgrade to Flyterial Pro</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Secure payment powered by mock Stripe checkout
              </p>
            </div>

            {/* Order Summary */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1rem 1.25rem',
              marginBottom: '2rem'
            }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 500, color: 'var(--foreground)' }}>Flyterial Pro (Monthly)</span>
                <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>$15.00</span>
              </div>
              <div className="flex justify-between items-center" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>Billed monthly. Cancel anytime.</span>
                <span>$15.00/mo</span>
              </div>
            </div>

            {/* Credit Card Form */}
            <form onSubmit={handlePay} className="flex-col gap-4">
              <div>
                <label htmlFor="card-name">Cardholder Name</label>
                <input 
                  type="text" 
                  id="card-name" 
                  required
                  value={cardName}
                  onChange={e => setCardName(e.target.value)}
                  placeholder="Jane Doe" 
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="card-number">Card Number</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    id="card-number" 
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="4242 4242 4242 4242" 
                    style={{ paddingLeft: '2.5rem' }}
                    disabled={loading}
                  />
                  <CreditCard size={16} style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)'
                  }} />
                </div>
              </div>

              <div className="flex gap-4">
                <div style={{ width: '60%' }}>
                  <label htmlFor="card-expiry">Expiration Date</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      id="card-expiry" 
                      required
                      maxLength={5}
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY" 
                      style={{ paddingLeft: '2.5rem' }}
                      disabled={loading}
                    />
                    <Calendar size={16} style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)'
                    }} />
                  </div>
                </div>
                <div style={{ width: '40%' }}>
                  <label htmlFor="card-cvc">CVC</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      id="card-cvc" 
                      required
                      maxLength={4}
                      value={cardCvc}
                      onChange={e => setCardCvc(e.target.value.replace(/[^0-9]/g, ''))}
                      placeholder="123" 
                      style={{ paddingLeft: '2.5rem' }}
                      disabled={loading}
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
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full" 
                style={{ 
                  marginTop: '1.5rem', 
                  fontSize: '1rem', 
                  padding: '0.95rem',
                  background: 'linear-gradient(to right, var(--primary), #a855f7)',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }} 
                disabled={loading}
              >
                {loading ? 'Processing Securely...' : 'Pay $15.00'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
