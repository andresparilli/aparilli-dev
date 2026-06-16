import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "2rem",
      background: "#0a0a0f",
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "clamp(4rem, 10vw, 7rem)",
        color: "var(--accent, #7c5ce0)",
        textShadow: "0 0 30px rgba(124, 92, 224, 0.4)",
        marginBottom: "1rem",
        fontWeight: "bold"
      }}>
        404
      </h1>
      <p style={{
        fontSize: "1.15rem",
        color: "var(--text-secondary, #9090a0)",
        marginBottom: "2.5rem",
        maxWidth: "500px",
        lineHeight: "1.6"
      }}>
        &gt; ERROR: El recurso solicitado no se encuentra alojado en este servidor. La ruta podría haber cambiado.
      </p>
      <Link href="/" className="btn btn-primary">
        &gt; cd /home/aparilli
      </Link>
    </main>
  );
}
