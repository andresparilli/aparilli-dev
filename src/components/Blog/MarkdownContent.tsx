import React from 'react';

interface Props {
  content: string;
}

export default function MarkdownContent({ content }: Props) {
  if (!content) return null;

  const blocks = content.split(/\n\s*\n/);

  return (
    <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        if (trimmed === '---') {
          return <hr key={idx} style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', margin: '32px 0' }} />;
        }

        if (trimmed.startsWith('# ')) {
          return (
            <h1 key={idx} style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f8fafc', marginTop: '32px', marginBottom: '16px', lineHeight: 1.2 }}>
              {formatInline(trimmed.slice(2))}
            </h1>
          );
        }

        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={idx} style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f8fafc', marginTop: '32px', marginBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '8px' }}>
              {formatInline(trimmed.slice(3))}
            </h2>
          );
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={idx} style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginTop: '24px', marginBottom: '8px' }}>
              {formatInline(trimmed.slice(4))}
            </h3>
          );
        }

        if (trimmed.split('\n').every((line) => line.trim().startsWith('- ') || line.trim().startsWith('* '))) {
          const items = trimmed.split('\n').map((line) => line.trim().replace(/^[-*]\s+/, ''));
          return (
            <ul key={idx} style={{ paddingLeft: '24px', listStyleType: 'disc', margin: '16px 0', color: '#cbd5e1' }}>
              {items.map((item, itemIdx) => (
                <li key={itemIdx} style={{ marginBottom: '8px' }}>{formatInline(item)}</li>
              ))}
            </ul>
          );
        }

        if (trimmed.split('\n').every((line) => /^\d+\.\s+/.test(line.trim()))) {
          const items = trimmed.split('\n').map((line) => line.trim().replace(/^\d+\.\s+/, ''));
          return (
            <ol key={idx} style={{ paddingLeft: '24px', listStyleType: 'decimal', margin: '16px 0', color: '#cbd5e1' }}>
              {items.map((item, itemIdx) => (
                <li key={itemIdx} style={{ marginBottom: '8px' }}>{formatInline(item)}</li>
              ))}
            </ol>
          );
        }

        if (trimmed.startsWith('> ')) {
          return (
            <blockquote key={idx} style={{ borderLeft: '4px solid #6366f1', paddingLeft: '16px', fontStyle: 'italic', color: '#94a3b8', margin: '16px 0', background: 'rgba(99, 102, 241, 0.05)', padding: '12px 16px', borderRadius: '0 8px 8px 0' }}>
              {formatInline(trimmed.replace(/^>\s+/, ''))}
            </blockquote>
          );
        }

        return (
          <p key={idx} style={{ color: '#cbd5e1', lineHeight: 1.8, marginBottom: '16px' }}>
            {formatInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function formatInline(text: string): React.ReactNode {
  if (!text) return '';

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex = /(\*\*(.*?)\*\*|\[(.*?)\]\((.*?)\))/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2] !== undefined) {
      parts.push(
        <strong key={match.index} style={{ color: '#f8fafc', fontWeight: 700 }}>
          {formatInline(match[2])}
        </strong>
      );
    } else if (match[3] !== undefined && match[4] !== undefined) {
      parts.push(
        <a
          key={match.index}
          href={match[4]}
          target={match[4].startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'underline' }}
        >
          {formatInline(match[3])}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
