'use client';

import { useState } from 'react';
import { X, Share2 } from 'lucide-react';
import { useSaaS } from './SaaSProvider';

interface SharePresetModalProps {
  onClose: () => void;
  onShare: (name: string, level: string, structure: string, description: string) => Promise<boolean>;
}

export default function SharePresetModal({ onClose, onShare }: SharePresetModalProps) {
  const { t } = useSaaS();
  const [name, setName] = useState('');
  const [level, setLevel] = useState('highschool');
  const [structure, setStructure] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !structure || !description) {
      setError(t.sharePreset.fillFieldsError);
      return;
    }

    setLoading(true);
    const success = await onShare(name, level, structure, description);
    setLoading(false);

    if (!success) {
      setError(t.sharePreset.shareFailed);
    }
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
        maxWidth: '480px',
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
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Share2 size={24} color="var(--primary)" /> {t.sharePreset.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {t.sharePreset.subtitle}
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
            <label htmlFor="preset-name">{t.sharePreset.nameLabel}</label>
            <input 
              type="text" 
              id="preset-name" 
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t.sharePreset.namePlaceholder} 
              disabled={loading}
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label htmlFor="preset-level">{t.sharePreset.levelLabel}</label>
              <select id="preset-level" value={level} onChange={e => setLevel(e.target.value)} disabled={loading}>
                <option value="elementary">{t.common.elementary}</option>
                <option value="highschool">{t.common.highschool}</option>
                <option value="undergrad">{t.common.undergrad}</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="preset-structure">{t.sharePreset.structureLabel}</label>
            <textarea 
              id="preset-structure" 
              required
              rows={2}
              value={structure}
              onChange={e => setStructure(e.target.value)}
              placeholder={t.sharePreset.structurePlaceholder} 
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="preset-desc">{t.sharePreset.descriptionLabel}</label>
            <textarea 
              id="preset-desc" 
              required
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={t.sharePreset.descriptionPlaceholder} 
              disabled={loading}
            />
          </div>

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
            {loading ? t.sharePreset.sharing : t.sharePreset.shareBtn}
          </button>
        </form>
      </div>
    </div>
  );
}
