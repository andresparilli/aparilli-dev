"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
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
  );
}
