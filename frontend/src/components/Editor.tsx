'use client';

import { useSaaS } from './SaaSProvider';

interface EditorProps {
  content: string;
  onChange?: (content: string) => void;
}

export default function Editor({ content, onChange }: EditorProps) {
  const { t } = useSaaS();

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)', fontWeight: 500, borderTopLeftRadius: 'var(--radius)', borderTopRightRadius: 'var(--radius)' }}>
        {t.editor.title}
      </div>
      <textarea 
        value={content}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          flex: 1,
          width: '100%',
          minHeight: '600px',
          padding: '2rem',
          border: 'none',
          resize: 'vertical',
          background: 'transparent',
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          outline: 'none',
          color: 'var(--foreground)'
        }}
        spellCheck="false"
      />
    </div>
  );
}
