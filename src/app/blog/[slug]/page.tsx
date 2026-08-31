import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Andrés E. Parilli`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

import MarkdownContent from '@/components/Blog/MarkdownContent';

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px 80px' }}>
      <Link href="/blog" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
        &larr; Volver al Blog
      </Link>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', fontSize: '0.85rem', padding: '4px 12px', borderRadius: '20px', fontWeight: 600 }}>
            {post.tags[0] || 'Desarrollo Web'}
          </span>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{post.date}</span>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>• {post.readTime} de lectura</span>
        </div>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.2, marginBottom: '16px' }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
            AP
          </div>
          <div>
            <div style={{ color: '#f8fafc', fontWeight: 600 }}>{post.author}</div>
            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Full-Stack Software Architect & AI Automation Specialist</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <MarkdownContent content={post.content} />
      </div>

      {/* CTA Box */}
      <div
        style={{
          marginTop: '60px',
          padding: '36px',
          borderRadius: '20px',
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
          ¿Quieres llevar tu proyecto web al siguiente nivel?
        </h3>
        <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
          Diseñamos soluciones a medida con rendimiento superior y automatización de procesos empresariales.
        </p>
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            background: '#6366f1',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: '10px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Contactar con Andrés Parilli
        </Link>
      </div>
    </article>
  );
}
