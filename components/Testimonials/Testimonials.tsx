import styles from "./Testimonials.module.css"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Муцаев Исмаил",
      role: "Постоянный клиент",
      quote:
        "Невероятно вкусные сыры! Камамбер просто тает во рту. Чувствуется, что сделано с любовью и из качественных продуктов.",
      avatar: "А",
    },
    {
      name: "Дмитрий Волков",
      role: "Шеф-повар",
      quote:
        "Использую эти сыры в своём ресторане. Гости в восторге! Особенно нравится трюфельный пекорино — настоящий деликатес.",
      avatar: "Д",
    },
    {
      name: "Елена Кузнецова",
      role: "Любитель сыров",
      quote:
        "Открыла для себя голубой сыр благодаря этой сыроварне. Теперь регулярно заказываю. Качество всегда на высоте!",
      avatar: "Е",
    },
  ]

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Отзывы</div>
          <h2 className={styles.title}>Что говорят наши клиенты</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
