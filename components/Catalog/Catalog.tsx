"use client"

import styles from "./Catalog.module.css"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import { filterByCategory } from "@/store/slices/catalogSlice"
import ProductCard from "../ProductCard/ProductCard"

const categories = [
  { id: null, label: "Все сыры" },
  { id: "soft", label: "Мягкие" },
  { id: "hard", label: "Твёрдые" },
  { id: "blue", label: "С плесенью" },
  { id: "fresh", label: "Свежие" },
]

export default function Catalog() {
  const dispatch = useDispatch()
  const { filteredItems, selectedCategory } = useSelector((state: RootState) => state.catalog)

  return (
    <section id="catalog" className={styles.catalog}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Наши сыры</div>
          <h2 className={styles.title}>Каталог продукции</h2>
          <p className={styles.subtitle}>Каждый сыр создан с любовью и заботой о качестве</p>
        </div>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category.id || "all"}
              className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ""}`}
              onClick={() => dispatch(filterByCategory(category.id))}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((cheese) => (
            <ProductCard key={cheese.id} product={cheese} />
          ))}
        </div>
      </div>
    </section>
  )
}
