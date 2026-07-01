'use client';

import { Sparkles, FileText, Download, Clock, ShieldCheck, Zap } from 'lucide-react';

interface LandingPageProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenCheckout: () => void;
  userLoggedIn: boolean;
  onGoToDashboard: () => void;
}

export default function LandingPage({ onOpenAuth, onOpenCheckout, userLoggedIn, onGoToDashboard }: LandingPageProps) {
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
            AI-Powered Instructional Design
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
            Craft Educational Materials in Seconds
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
            Leverage advanced Gemini AI to instantly generate high-fidelity, structured lesson plans, quizzes, assignments, and study guides for any level.
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
              {userLoggedIn ? 'Go to Dashboard' : 'Start Generating Free'}
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
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Features Built for Educators</h2>
          <p style={{ color: 'var(--text-muted)' }}>Everything you need to streamline course and lesson preparation.</p>
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
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Instant AI Generation</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Input any topic or subject, choose your target educational level, and get curriculum-aligned resources generated instantly.
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
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Markdown Editor</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Refine the generated material on the fly. Change wording, add notes, and format easily using the built-in side-by-side text editor.
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
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Bulk Export (.zip)</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Export all files as a single organized bundle. Get markdown files compressed into a ZIP folder ready for your LMS or drive.
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
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Generation History</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Save all generated files directly into your history drawer. Re-open, re-edit, or download past lessons at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Flexible Pricing Plans</h2>
          <p style={{ color: 'var(--text-muted)' }}>Start creating for free, or unlock unlimited potential with Pro.</p>
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
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Free Plan</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Perfect for trying out Flyterial</p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$0</span>
                <span style={{ color: 'var(--text-muted)', marginLeft: '0.25rem' }}>/ forever</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> 3 AI Generations Total
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> Basic Presets (Lesson + Quiz)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> Side-by-Side Markdown Editor
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> Local History Sync
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
              {userLoggedIn ? 'Go to Dashboard' : 'Get Started'}
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
              Popular
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Pro Plan <Sparkles size={18} color="#c084fc" />
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>For educators who need unlimited creation power</p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$15</span>
                <span style={{ color: 'var(--text-muted)', marginLeft: '0.25rem' }}>/ month</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: 500 }}>
                  <ShieldCheck size={18} color="#10b981" /> **Unlimited** Generations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> All Presets (Modules, Guides, etc.)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> Faster AI generation speeds
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> Full History drawer management
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#10b981" /> Priority email support
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
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
