import styles from "./About.module.css"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img 
            src="/cheese-maker-craftsman-traditional-dairy-workshop.jpg" 
            alt="О нас" 
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.content}>
          <div className={styles.label}>Наша история</div>
          <h2 className={styles.title}>Традиции и качество</h2>

          <p className={styles.description}>
            Наша сыроварня была основана в 2018 году с одной простой идеей — создавать настоящие, честные сыры,
            используя только натуральное фермерское молоко и традиционные технологии производства.
          </p>

          <p className={styles.description}>
            Каждая головка сыра делается вручную нашими мастерами-сыроделами, которые вкладывают душу в каждый этап
            производства — от подбора молока до финальной выдержки в специальных камерах.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className={styles.featureText}>100% натуральное молоко</span>
            </div>

            <div className={styles.feature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className={styles.featureText}>Традиционные рецепты</span>
            </div>

            <div className={styles.feature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className={styles.featureText}>Ручная работа</span>
            </div>

            <div className={styles.feature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className={styles.featureText}>Без консервантов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
