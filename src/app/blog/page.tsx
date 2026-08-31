import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Recursos | Andrés E. Parilli - Full-Stack Architect',
  description: 'Artículos sobre desarrollo web moderno, arquitectura software con Next.js/React, inteligencia artificial y automatización con n8n.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '120px 24px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Blog & Conocimiento Técnico
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto' }}>
          Estrategias de arquitectura web, optimización de rendimiento, SEO técnico y soluciones con Agentes IA para empresas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
        {posts.map((post) => (
          <article
            key={post.slug}
            style={{
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {post.tags[0] || 'Desarrollo Web'}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#f8fafc', lineHeight: 1.3 }}>
                <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {post.excerpt}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '20px' }}>
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#818cf8',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                Leer Artículo Completo &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Lead Capture Banner */}
      <div
        style={{
          marginTop: '80px',
          padding: '40px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
          ¿Tienes un Proyecto Web o de Automatización en Mente?
        </h3>
        <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 24px' }}>
          Desarrollamos aplicaciones web de alto rendimiento y agentes IA personalizados para potenciar tu empresa.
        </p>
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
          }}
        >
          Solicitar Cotización de Proyecto Web
        </Link>
      </div>
    </div>
  );
}
