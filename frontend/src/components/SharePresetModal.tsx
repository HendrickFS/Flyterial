'use client';

import { useState } from 'react';
import { X, Share2, FileSpreadsheet } from 'lucide-react';

interface SharePresetModalProps {
  onClose: () => void;
  onShare: (name: string, level: string, structure: string, description: string) => Promise<boolean>;
}

export default function SharePresetModal({ onClose, onShare }: SharePresetModalProps) {
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
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    const success = await onShare(name, level, structure, description);
    setLoading(false);

    if (!success) {
      setError('Failed to share preset. Please try again.');
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
            <Share2 size={24} color="var(--primary)" /> Share Custom Preset
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Design a custom structure preset and share it with the Flyterial community
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
            <label htmlFor="preset-name">Preset Name</label>
            <input 
              type="text" 
              id="preset-name" 
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Biology Lab & Quiz, Essay Outline..." 
              disabled={loading}
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label htmlFor="preset-level">Target Level</label>
              <select id="preset-level" value={level} onChange={e => setLevel(e.target.value)} disabled={loading}>
                <option value="elementary">Elementary School</option>
                <option value="highschool">High School</option>
                <option value="undergrad">Undergraduate</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="preset-structure">Structure Details</label>
            <textarea 
              id="preset-structure" 
              required
              rows={2}
              value={structure}
              onChange={e => setStructure(e.target.value)}
              placeholder="e.g. 1 Lesson Outline, 1 Classroom Activity sheet, and 1 Grading Rubric" 
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="preset-desc">Description</label>
            <textarea 
              id="preset-desc" 
              required
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Describe what resources this preset will generate..." 
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
            {loading ? 'Sharing...' : 'Share with Community ✨'}
          </button>
        </form>
      </div>
    </div>
  );
}
