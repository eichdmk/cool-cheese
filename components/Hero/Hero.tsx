import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img 
        src="/artisan-cheese-making-workshop-rustic-dairy-farm.jpg" 
        alt="Сыроварня" 
        className={styles.background}
        loading="eager"
        fetchPriority="high"
      />
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Авторские Сыры <br />
          <span className={styles.highlight}>Ручной Работы</span>
        </h1>
        <p className={styles.subtitle}>
          Натуральное фермерское молоко, традиционные технологии и любовь к своему делу в каждом кусочке
        </p>
        <a href="#catalog" className={styles.cta}>
          Смотреть каталог
        </a>
      </div>
    </section>
  )
}
