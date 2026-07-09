'use client';

import { Sparkles, FileText, Download, Clock, ShieldCheck, Zap } from 'lucide-react';
import { useSaaS } from './SaaSProvider';

interface LandingPageProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenCheckout: () => void;
  userLoggedIn: boolean;
  onGoToDashboard: () => void;
}

export default function LandingPage({ onOpenAuth, onOpenCheckout, userLoggedIn, onGoToDashboard }: LandingPageProps) {
  const { t } = useSaaS();

  const handleCta = () => {
    if (userLoggedIn) {
      onGoToDashboard();
    } else {
      onOpenAuth('register');
    }
  };

  const handleProPlan = () => {
    if (userLoggedIn) {
      onOpenCheckout();
    } else {
      onOpenAuth('register');
    }
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Hero Section */}
      <section style={{
        paddingTop: '6rem',
        paddingBottom: '5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Glows */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 100%)',
          zIndex: -1,
          filter: 'blur(50px)'
        }} />

        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '99px',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 500,
            marginBottom: '2rem',
            animation: 'pulse 3s infinite'
          }}>
            <Sparkles size={14} />
            {t.landing.badge}
          </div>

          <h1 style={{
            fontSize: '3.75rem',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, var(--foreground) 30%, #a855f7 70%, var(--primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t.landing.title}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            maxWidth: '650px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {t.landing.subtitle}
          </p>

          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            <button 
              onClick={handleCta}
              className="btn btn-primary"
              style={{
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(to right, var(--primary), #a855f7)',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
              }}
            >
              {userLoggedIn ? t.landing.ctaDashboard : t.landing.ctaStart}
            </button>
            <a 
              href="#pricing"
              className="btn"
              style={{
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)'
              }}
            >
              {t.landing.ctaPricing}
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>{t.landing.featuresTitle}</h2>
          <p style={{ color: 'var(--text-muted)' }}>{t.landing.featuresSubtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {/* Card 1 */}
          <div className="glass-panel" style={{ padding: '2rem', transition: 'all 0.3s' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(99, 102, 241, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              marginBottom: '1.5rem'
            }}>
              <Zap size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t.landing.feature1Title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              {t.landing.feature1Desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{ padding: '2rem', transition: 'all 0.3s' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(168, 85, 247, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a855f7',
              marginBottom: '1.5rem'
            }}>
              <FileText size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t.landing.feature2Title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              {t.landing.feature2Desc}
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{ padding: '2rem', transition: 'all 0.3s' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3b82f6',
              marginBottom: '1.5rem'
            }}>
              <Download size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t.landing.feature3Title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              {t.landing.feature3Desc}
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel" style={{ padding: '2rem', transition: 'all 0.3s' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              marginBottom: '1.5rem'
            }}>
              <Clock size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t.landing.feature4Title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              {t.landing.feature4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>{t.landing.pricingTitle}</h2>
          <p style={{ color: 'var(--text-muted)' }}>{t.landing.pricingSubtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {/* Free Plan */}
          <div className="glass-panel" style={{
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'between',
            height: '100%',
            position: 'relative'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t.landing.freePlanName}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t.landing.freePlanDesc}</p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{t.landing.freePlanPrice}</span>
                <span style={{ color: 'var(--text-muted)', marginLeft: '0.25rem' }}>{t.landing.freePlanDuration}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.freePlanFeature1}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.freePlanFeature2}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.freePlanFeature3}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.freePlanFeature4}
                </li>
              </ul>
            </div>

            <button 
              onClick={handleCta}
              className="btn"
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                padding: '0.85rem',
                marginTop: 'auto'
              }}
            >
              {userLoggedIn ? t.landing.ctaDashboard : t.landing.freePlanCta}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="glass-panel" style={{
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'between',
            height: '100%',
            position: 'relative',
            border: '2px solid rgba(168, 85, 247, 0.5)',
            boxShadow: '0 10px 30px rgba(168, 85, 247, 0.15)'
          }}>
            {/* Best Value Badge */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '2.5rem',
              background: 'linear-gradient(to right, var(--primary), #a855f7)',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.75rem',
              borderRadius: '99px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {t.landing.popular}
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {t.landing.proPlanName} <Sparkles size={18} color="#c084fc" />
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t.landing.proPlanDesc}</p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{t.landing.proPlanPrice}</span>
                <span style={{ color: 'var(--text-muted)', marginLeft: '0.25rem' }}>{t.landing.proPlanDuration}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: 500 }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.proPlanFeature1}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.proPlanFeature2}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.proPlanFeature3}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.proPlanFeature4}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> {t.landing.proPlanFeature5}
                </li>
              </ul>
            </div>

            <button 
              onClick={handleProPlan}
              className="btn btn-primary"
              style={{
                width: '100%',
                background: 'linear-gradient(to right, var(--primary), #a855f7)',
                padding: '0.85rem',
                marginTop: 'auto',
                boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
              }}
            >
              {t.landing.proPlanCta}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
