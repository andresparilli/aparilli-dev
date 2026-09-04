"use client";

import { useEffect, useState } from "react";
import styles from "./achievements.module.css";

interface Tier {
  name: string;
  value: number;
}

interface Evidence {
  session_id?: string;
  title?: string;
  value?: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  secret: boolean;
  unlocked: boolean;
  tier: string | null;
  unlocked_at: number | null;
  evidence: Evidence | null;
  tiers: Tier[];
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/data/achievements.json")
      .then((res) => res.json())
      .then((data) => {
        setAchievements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading achievements:", err);
        setLoading(false);
      });
  }, []);

  const categories = ["All", "Hermes Native", "Vibe Coding", "Tool Mastery", "Lifestyle"];

  const filtered = achievements.filter((a) => {
    const matchCategory = filter === "All" || a.category === filter;
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalUnlocked = achievements.filter((a) => a.unlocked).length;
  const unlockPercentage = achievements.length ? Math.round((totalUnlocked / achievements.length) * 100) : 0;

  // Simple inline SVGs for standard icons
  const getIconSvg = (iconName: string) => {
    switch (iconName) {
      case "compass":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
      case "key":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        );
      case "branch":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="3" x2="6" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
          </svg>
        );
      case "daemon":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        );
      case "eye":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case "marathon":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
        );
      case "calendar":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case "moon":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        );
      case "cache":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        );
    }
  };

  const getTierColorClass = (tier: string | null) => {
    if (!tier) return styles.tierLocked;
    switch (tier.toLowerCase()) {
      case "copper":
        return styles.tierCopper;
      case "silver":
        return styles.tierSilver;
      case "gold":
        return styles.tierGold;
      case "diamond":
        return styles.tierDiamond;
      case "olympian":
        return styles.tierOlympian;
      default:
        return styles.tierLocked;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        {/* Title */}
        <header className={styles.header}>
          <div className={styles.badgeGlow}>AGENTIC GAMECORE</div>
          <h1 className={styles.title}>Hermes Achievements</h1>
          <p className={styles.subtitle}>
            Colección de insignias y logros técnicos desbloqueados por Andrés E. Parilli
            durante sesiones de desarrollo, optimización de infraestructura y automatización con agentes autónomos.
          </p>
        </header>

        {/* Global Progress Stats */}
        <section className={styles.statsBar}>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Logros Desbloqueados</span>
            <span className={styles.statValue}>
              {totalUnlocked} <span className={styles.statTotal}>/ {achievements.length}</span>
            </span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Porcentaje Completado</span>
            <span className={styles.statValue}>{unlockPercentage}%</span>
          </div>
          <div className={styles.statBox} style={{ flexGrow: 2 }}>
            <div className={styles.progressBarBg}>
              <div className={styles.progressBarFill} style={{ width: `${unlockPercentage}%` }}></div>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <div className={styles.filterSection}>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat === "All" ? "Todos" : cat}
              </button>
            ))}
          </div>

          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Buscar logros..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className={styles.loaderArea}>
            <div className={styles.spinner}></div>
            <p>Escaneando base de datos del Agente...</p>
          </div>
        ) : (
          /* Achievements Grid */
          <div className={styles.grid}>
            {filtered.map((item) => {
              const isLocked = !item.unlocked;
              const isSecret = item.secret && isLocked;

              return (
                <div
                  key={item.id}
                  className={`${styles.card} ${isLocked ? styles.cardLocked : ""} ${
                    getTierColorClass(item.tier)
                  }`}
                >
                  {/* Card Icon Header */}
                  <div className={styles.cardHeader}>
                    <div className={styles.iconContainer}>
                      {isSecret ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      ) : (
                        getIconSvg(item.icon)
                      )}
                    </div>
                    {item.unlocked && (
                      <span className={`${styles.tierBadge} ${getTierColorClass(item.tier)}`}>
                        {item.tier}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardName}>
                      {isSecret ? "Logro Secreto" : item.name}
                    </h3>
                    <p className={styles.cardDesc}>
                      {isSecret
                        ? "Esta insignia es un misterio. Sigue interactuando con Hermes para descubrir la señal relacionada."
                        : item.description}
                    </p>
                  </div>

                  {/* Card Footer / Metadata */}
                  {!isLocked && (
                    <div className={styles.cardFooter}>
                      <span className={styles.cardCategory}>{item.category}</span>
                      {item.unlocked_at && (
                        <span className={styles.unlockDate}>
                          {new Date(item.unlocked_at * 1000).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      )}
                    </div>
                  )}
                  {isLocked && (
                    <div className={styles.cardFooterLocked}>
                      <span>BLOQUEADO</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
