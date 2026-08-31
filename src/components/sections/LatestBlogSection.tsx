import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function LatestBlogSection() {
  const posts = getAllPosts().slice(0, 2);

  if (posts.length === 0) return null;

  return (
    <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <p style={{ color: "#818cf8", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
              Publicaciones & Artículos
            </p>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f8fafc" }}>
              Últimas Publicaciones del Blog
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              color: "#a5b4fc",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Ver Todo el Blog &rarr;
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: "rgba(30, 41, 59, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ color: "#6366f1", fontSize: "0.8rem", fontWeight: 600 }}>
                    {post.tags[0] || "Desarrollo Web"}
                  </span>
                  <span style={{ color: "#64748b", fontSize: "0.8rem" }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f8fafc", marginBottom: "10px", lineHeight: 1.3 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {post.title}
                  </Link>
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "16px" }}>
                  {post.excerpt}
                </p>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                style={{ color: "#818cf8", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}
              >
                Leer Artículo &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
