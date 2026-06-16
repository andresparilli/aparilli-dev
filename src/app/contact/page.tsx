"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./contact.module.css";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.header}>
          <Link href="/" className={styles.back}>
            ← Volver
          </Link>
          <p className="section-label">Contacto</p>
          <h1 className={styles.title}>Hablemos</h1>
          <p className={styles.subtitle}>
            ¿Tienes una idea, un proyecto o una consulta de infraestructura? Escríbeme.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Formulario */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Enviar un mensaje</h2>
            {submitted ? (
              <div className={styles.successMessage}>
                ✓ ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="tu@correo.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.textarea}
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Tarjetas de Contacto */}
          <div className={styles.infoCol}>
            <div className={`card ${styles.infoCard}`} style={{ padding: "var(--space-md)" }}>
              <h2 className={styles.infoTitle}>Canales Directos</h2>
              <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                Prefiero la comunicación directa y asíncrona. Siéntete libre de escribirme por Telegram o correo electrónico:
              </p>
              <div className={styles.links}>
                <a
                  href={`mailto:${profile.email}`}
                  className={styles.linkItem}
                >
                  <div className={styles.linkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className={styles.linkText}>
                    <span className={styles.linkLabel}>Email</span>
                    <span className={styles.linkVal}>{profile.email}</span>
                  </div>
                </a>

                <a
                  href="https://t.me/aparilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                >
                  <div className={styles.linkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.33.015.098.034.32.019.493z"/>
                    </svg>
                  </div>
                  <div className={styles.linkText}>
                    <span className={styles.linkLabel}>Telegram</span>
                    <span className={styles.linkVal}>@aparilli</span>
                  </div>
                </a>

                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                >
                  <div className={styles.linkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className={styles.linkText}>
                    <span className={styles.linkLabel}>LinkedIn</span>
                    <span className={styles.linkVal}>andresparilli</span>
                  </div>
                </a>

                <a
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                >
                  <div className={styles.linkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className={styles.linkText}>
                    <span className={styles.linkLabel}>GitHub</span>
                    <span className={styles.linkVal}>andresparilli</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
