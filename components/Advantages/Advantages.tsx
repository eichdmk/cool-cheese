import styles from "./Advantages.module.css"

const icons = {
  milk: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8v4H8V2z"></path>
      <path d="M6 6h12v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6z"></path>
      <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path>
      <line x1="12" y1="10" x2="12" y2="16"></line>
      <line x1="9" y1="13" x2="15" y2="13"></line>
    </svg>
  ),
  hand: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11v-1a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0-2 2h-1a2 2 0 0 0-2-2V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-2a2 2 0 0 0-2-2h-1z"></path>
    </svg>
  ),
  clock: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  leaf: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"></path>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9 14.5 10 16 10 19.5c0 1.5-1 2.5-2.5 2.5C5.5 22 2 21 2 21z"></path>
    </svg>
  ),
}

export default function Advantages() {
  const advantages = [
    {
      icon: icons.milk,
      title: "Натуральное молоко",
      description: "Используем только свежее фермерское молоко от проверенных поставщиков",
    },
    {
      icon: icons.hand,
      title: "Ручная работа",
      description: "Каждая головка сыра создаётся вручную нашими мастерами-сыроделами",
    },
    {
      icon: icons.clock,
      title: "Правильная выдержка",
      description: "Соблюдаем температурный режим и сроки выдержки для идеального вкуса",
    },
    {
      icon: icons.leaf,
      title: "Без консервантов",
      description: "Не используем искусственные добавки и консерванты в производстве",
    },
  ]

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.advantage}>
              <div className={styles.icon}>{advantage.icon}</div>
              <h3 className={styles.title}>{advantage.title}</h3>
              <p className={styles.description}>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
