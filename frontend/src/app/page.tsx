'use client';

import { useState } from 'react';
import { Loader2, Download, FileText, ChevronLeft, Trash2, Sparkles, Clock, Lock, ArrowRight } from 'lucide-react';
import Editor from '@/components/Editor';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { useSaaS } from '@/components/SaaSProvider';
import Navbar from '@/components/Navbar';
import LandingPage from '@/components/LandingPage';
import AuthModal from '@/components/AuthModal';
import CheckoutModal from '@/components/CheckoutModal';
import SharePresetModal from '@/components/SharePresetModal';

export default function Home() {
  const { 
    user, 
    plan, 
    generationsUsed, 
    generationsLimit, 
    history, 
    addGeneration, 
    deleteHistoryItem,
    presets,
    sharePreset
  } = useSaaS();

  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState<{title: string, content: string}[] | null>(null);
  const [activeDoc, setActiveDoc] = useState<number>(0);

  // SaaS modal states
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSharePresetModal, setShowSharePresetModal] = useState(false);

  const [formData, setFormData] = useState({
    subject: '',
    level: 'highschool',
    preset: 'lesson-quiz',
    context: ''
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject) return;

    // Check if user is logged in
    if (!user) {
      setAuthModalMode('register');
      setShowAuthModal(true);
      return;
    }

    // Check quota limits
    if (plan === 'free' && generationsUsed >= generationsLimit) {
      setShowCheckoutModal(true);
      return;
    }
    
    // Resolve custom structure if community preset is selected
    const customPreset = presets.find(p => p.id === formData.preset);

    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          customStructure: customPreset ? customPreset.structure : undefined
        })
      });
      const data = await res.json();
      if (data.documents) {
        setDocuments(data.documents);
        setActiveDoc(0);
        // Save to SaaS Provider history
        addGeneration(formData.subject, formData.level, formData.preset, formData.context, data.documents);
      } else {
        alert('Error generating documents: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Failed to connect to generation service.');
    } finally {
      setLoading(false);
    }
  };

  const handlePresetChange = (val: string) => {
    if (plan === 'free' && (val === 'full-module' || val === 'study-guide')) {
      setShowCheckoutModal(true);
      return; // Keep previous preset
    }
    setFormData({ ...formData, preset: val });
  };

  const downloadZip = async () => {
    if (!documents) return;
    const zip = new JSZip();
    documents.forEach(doc => {
      zip.file(`${doc.title}.md`, doc.content);
    });
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, `${formData.subject.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_materials.zip`);
  };

  const openAuth = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setShowAuthModal(true);
  };

  const openCheckout = () => {
    if (!user) {
      setAuthModalMode('register');
      setShowAuthModal(true);
      return;
    }
    setShowCheckoutModal(true);
  };

  // Render Landing Page if user is not logged in
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
        <Navbar onOpenAuth={openAuth} onOpenCheckout={openCheckout} />
        <LandingPage 
          onOpenAuth={openAuth} 
          onOpenCheckout={openCheckout} 
          userLoggedIn={false}
          onGoToDashboard={() => {}}
        />

        {showAuthModal && (
          <AuthModal 
            initialMode={authModalMode} 
            onClose={() => setShowAuthModal(false)}
            onSuccess={() => {}} 
          />
        )}
      </div>
    );
  }

  // Render main layout (logged in dashboard)
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
      <Navbar onOpenAuth={openAuth} onOpenCheckout={openCheckout} />

      {/* Main Workspace */}
      <main className="container flex-1" style={{ paddingTop: '2.5rem', paddingBottom: '4rem', display: 'flex', flexDirection: 'column' }}>
        
        {documents ? (
          /* Document Editor View */
          <div style={{ animation: 'fadeIn 0.3s ease-out', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: '2rem' }}>
              <button className="btn" onClick={() => setDocuments(null)} style={{ background: 'transparent', border: '1px solid var(--border)' }}>
                <ChevronLeft size={20} /> Back to Dashboard
              </button>
              <button className="btn btn-primary flex items-center gap-2" onClick={downloadZip} style={{ background: 'linear-gradient(to right, var(--primary), #a855f7)' }}>
                <Download size={20} /> Download All (.zip)
              </button>
            </div>

            <div className="flex gap-6" style={{ flex: 1, minHeight: 0 }}>
              {/* Files list */}
              <div className="glass-panel" style={{ width: '260px', padding: '1.25rem', alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--foreground)' }}>Generated Files</h3>
                <div className="flex-col gap-2" style={{ display: 'flex' }}>
                  {documents.map((doc, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveDoc(idx)}
                      className="flex items-center gap-2 w-full"
                      style={{ 
                        padding: '0.75rem', 
                        borderRadius: 'var(--radius)', 
                        background: activeDoc === idx ? 'var(--primary)' : 'rgba(255, 255, 255, 0.02)',
                        color: activeDoc === idx ? 'var(--primary-foreground)' : 'var(--foreground)',
                        border: activeDoc === idx ? 'none' : '1px solid var(--border)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <FileText size={16} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.9rem' }}>{doc.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Editor */}
              <div className="glass-panel flex-1" style={{ padding: '0', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <Editor 
                  content={documents[activeDoc].content} 
                  onChange={(newContent) => {
                    const newDocs = [...documents];
                    newDocs[activeDoc].content = newContent;
                    setDocuments(newDocs);
                  }} 
                />
              </div>
            </div>
          </div>
        ) : (
          /* Creator Dashboard View (Form + History) */
          <div className="flex gap-6" style={{ flex: 1, alignItems: 'stretch', animation: 'fadeIn 0.3s ease-out' }}>
            
            {/* Left Column: History Drawer */}
            <div className="glass-panel flex-col" style={{ width: '320px', padding: '1.5rem', display: 'flex', height: 'fit-content' }}>
              <div className="flex items-center gap-2" style={{ marginBottom: '1.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
                <Clock size={18} color="var(--primary)" />
                <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Generation History</h3>
              </div>

              {history.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                  <HistoryPlaceholder />
                  <p style={{ fontSize: '0.85rem', marginTop: '1rem' }}>Your generated educational materials will appear here for easy access.</p>
                </div>
              ) : (
                <div className="flex-col gap-3" style={{ display: 'flex', overflowY: 'auto', maxHeight: '500px', paddingRight: '0.25rem' }}>
                  {history.map((item) => (
                    <div 
                      key={item.id}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)',
                        background: 'rgba(255, 255, 255, 0.01)',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem'
                      }}
                      className="history-item-card"
                      onClick={() => {
                        setDocuments(item.documents);
                        setFormData({
                          subject: item.subject,
                          level: item.level,
                          preset: item.preset,
                          context: item.context
                        });
                        setActiveDoc(0);
                      }}
                    >
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteHistoryItem(item.id);
                        }}
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                          padding: '0.25rem',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        className="trash-btn"
                      >
                        <Trash2 size={14} />
                      </button>

                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)', paddingRight: '1.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.subject}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                        {item.level} • {item.preset === 'lesson-quiz' ? 'Lesson + Quiz' : item.preset === 'full-module' ? 'Full Module' : 'Study Guide'}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Generation Form */}
            <div className="glass-panel flex-1" style={{ position: 'relative', overflow: 'hidden', padding: '2.5rem' }}>
              {loading && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(2, 6, 23, 0.85)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                  <Loader2 className="animate-spin" size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <h3 className="animate-pulse" style={{ color: 'var(--foreground)' }}>Crafting educational magic...</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Generating structured curriculum documents via Gemini</p>
                </div>
              )}
              
              <div style={{ marginBottom: '2.25rem' }}>
                <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem', background: 'linear-gradient(to right, var(--primary), #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Educational Material Generator
                </h1>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Enter your topic and parameters to craft rich curriculum assets.</p>
              </div>
              
              <form className="flex-col gap-6" onSubmit={handleGenerate}>
                <div>
                  <label htmlFor="subject">Subject / Topic</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    placeholder="e.g. Cellular Biology, World War II..." 
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-full">
                    <label htmlFor="level">Educational Level</label>
                    <select id="level" value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})}>
                      <option value="elementary">Elementary School</option>
                      <option value="highschool">High School</option>
                      <option value="undergrad">Undergraduate</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.375rem' }}>
                      <label htmlFor="preset" style={{ margin: 0 }}>Structural Preset</label>
                      <button 
                        type="button"
                        onClick={() => {
                          if (!user) {
                            setAuthModalMode('register');
                            setShowAuthModal(true);
                          } else {
                            setShowSharePresetModal(true);
                          }
                        }}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--primary)',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          padding: 0
                        }}
                      >
                        + Share Preset
                      </button>
                    </div>
                    <select 
                      id="preset" 
                      value={formData.preset} 
                      onChange={e => handlePresetChange(e.target.value)}
                    >
                      <option value="lesson-quiz">1 Lesson Plan + 1 Quiz (Free)</option>
                      <option value="full-module">
                        {plan === 'pro' ? '2 Classes + 2 Quizzes + 1 Assignment' : 'Full Module (PRO Only 🔒)'}
                      </option>
                      <option value="study-guide">
                        {plan === 'pro' ? 'Comprehensive Study Guide' : 'Comprehensive Study Guide (PRO Only 🔒)'}
                      </option>
                      {presets.map(p => (
                        <option key={p.id} value={p.id}>{p.name} (Community)</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="context">Additional Context (Optional)</label>
                  <textarea 
                    id="context" 
                    rows={4} 
                    value={formData.context}
                    onChange={e => setFormData({...formData, context: e.target.value})}
                    placeholder="Specific focus areas, standards, or learning goals to customize the output..."></textarea>
                </div>

                {/* Quota warning display */}
                {plan === 'free' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'between',
                    background: 'rgba(99, 102, 241, 0.05)',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                    borderRadius: 'var(--radius)',
                    padding: '0.85rem 1.25rem',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                      <span>Quota:</span>
                      <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>{generationsUsed} / {generationsLimit} free generations used</span>
                    </div>
                    {generationsUsed >= generationsLimit ? (
                      <button 
                        type="button"
                        onClick={openCheckout}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#c084fc',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}
                      >
                        Unlock PRO <ArrowRight size={14} />
                      </button>
                    ) : null}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary w-full" 
                  style={{ 
                    marginTop: '1rem', 
                    fontSize: '1.1rem', 
                    padding: '1rem',
                    background: 'linear-gradient(to right, var(--primary), #a855f7)',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                  }} 
                  disabled={loading}
                >
                  {generationsUsed >= generationsLimit && plan === 'free' ? (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <Lock size={18} /> Upgrade to Generate ✨
                    </span>
                  ) : (
                    <span>Generate Resources ✨</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Global SaaS Modals */}
      {showAuthModal && (
        <AuthModal 
          initialMode={authModalMode} 
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => {}}
        />
      )}

      {showCheckoutModal && (
        <CheckoutModal 
          onClose={() => setShowCheckoutModal(false)}
        />
      )}

      {showSharePresetModal && (
        <SharePresetModal 
          onClose={() => setShowSharePresetModal(false)}
          onShare={async (name, level, structure, description) => {
            return await sharePreset(name, level, structure, description);
          }}
        />
      )}
    </div>
  );
}

// Inline Sub-components for Visual Polish
function HistoryPlaceholder() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)'
      }}>
        <Clock size={28} />
      </div>
    </div>
  );
}
