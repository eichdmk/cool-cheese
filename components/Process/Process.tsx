import styles from "./Process.module.css"

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <img 
        src="/cheese-aging-cellar-wooden-shelves-traditional-cav.jpg" 
        alt="Процесс производства" 
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Наш процесс</div>
          <h2 className={styles.title}>Как мы создаём сыр</h2>

          <p className={styles.description}>
            Производство каждого сыра — это искусство, требующее внимания к деталям, опыта и терпения. Мы следуем
            традиционным методам, проверенным временем.
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepText}>Отбор свежего фермерского молока высшего качества</div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepText}>Пастеризация и добавление натуральной закваски</div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepText}>Формование сырной массы вручную</div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepText}>Выдержка в специальных камерах с контролем температуры</div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepText}>Финальная проверка качества перед упаковкой</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
