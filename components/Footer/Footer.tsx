import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>Сыроварня</div>
            <p className={styles.brandDescription}>
              Авторские сыры ручной работы из натурального фермерского молока. Традиции и качество в каждом кусочке.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" fill="var(--color-dark-graphite)" />
                  <circle cx="18" cy="6" r="1.5" fill="var(--color-dark-graphite)" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="VK">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Каталог</h3>
            <a href="#catalog" className={styles.link}>
              Все сыры
            </a>
            <a href="#catalog" className={styles.link}>
              Мягкие сыры
            </a>
            <a href="#catalog" className={styles.link}>
              Твёрдые сыры
            </a>
            <a href="#catalog" className={styles.link}>
              С плесенью
            </a>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Компания</h3>
            <a href="#about" className={styles.link}>
              О нас
            </a>
            <a href="#process" className={styles.link}>
              Производство
            </a>
            <a href="#testimonials" className={styles.link}>
              Отзывы
            </a>
            <a href="#" className={styles.link}>
              Доставка
            </a>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Контакты</h3>
            <a href="tel:+79991234567" className={styles.link}>
              +7 (999) 123-45-67
            </a>
            <a href="mailto:info@syrovarnya.ru" className={styles.link}>
              info@syrovarnya.ru
            </a>
            <span className={styles.link}>Грозный, ул. Сырная, 15</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© 2026 Сыроварня. Все права защищены.</div>
          <div className={styles.legal}>
            <a href="#" className={styles.link}>
              Политика конфиденциальности
            </a>
            <a href="#" className={styles.link}>
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
