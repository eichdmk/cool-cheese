"use client"

import styles from "./ProductCard.module.css"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import { addToCart } from "@/store/slices/cartSlice"
import { toggleFavorite } from "@/store/slices/favoritesSlice"
import type { Cheese } from "@/store/slices/catalogSlice"

interface ProductCardProps {
  product: Cheese
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch()
  const isFavorite = useSelector((state: RootState) => state.favorites.ids.includes(product.id))
  const isInCart = useSelector((state: RootState) => state.cart.items.some((item) => item.id === product.id))

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={product.image || "/placeholder.svg"} 
          alt={product.name} 
          className={styles.image}
          loading="lazy"
        />

        <button
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ""}`}
          onClick={() => dispatch(toggleFavorite(product.id))}
          aria-label="Добавить в избранное"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {product.aging}
          </span>
          <span className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <line x1="12" y1="3" x2="12" y2="21"></line>
              <circle cx="8" cy="8" r="1.5"></circle>
              <circle cx="16" cy="8" r="1.5"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            {product.weight}
          </span>
        </div>

        <div className={styles.footer}>
          <div className={styles.price}>{product.price} ₽</div>
          <button
            className={`${styles.addButton} ${isInCart ? styles.inCart : ""}`}
            onClick={() => dispatch(addToCart(product))}
          >
            {isInCart ? "В корзине" : "В корзину"}
          </button>
        </div>
      </div>
    </div>
  )
}
