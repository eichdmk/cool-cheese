import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Cheese {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  aging: string
  weight: string
}

interface CatalogState {
  items: Cheese[]
  filteredItems: Cheese[]
  selectedCategory: string | null
}

const mockCheeses: Cheese[] = [
  {
    id: "1",
    name: "Камамбер Классический",
    description: "Мягкий сыр с белой плесенью, деликатный сливочный вкус с грибными нотками",
    price: 850,
    image: "/camembert-cheese-close-up-rustic-wooden-board.jpg",
    category: "soft",
    aging: "3 недели",
    weight: "250г",
  },
  {
    id: "2",
    name: "Горный Выдержанный",
    description: "Твёрдый сыр альпийского типа с ореховым послевкусием, выдержка 6 месяцев",
    price: 1200,
    image: "/aged-alpine-cheese-wheel-cave.jpg",
    category: "hard",
    aging: "6 месяцев",
    weight: "300г",
  },
  {
    id: "3",
    name: "Сливочная Рикотта",
    description: "Нежный свежий сыр из козьего молока, идеален для десертов и закусок",
    price: 650,
    image: "/fresh-ricotta-cheese-herbs-bowl.jpg",
    category: "fresh",
    aging: "свежий",
    weight: "200г",
  },
  {
    id: "4",
    name: "Голубой Благородный",
    description: "Полутвёрдый сыр с благородной голубой плесенью, насыщенный пикантный вкус",
    price: 950,
    image: "/blue-cheese-gorgonzola-marble-texture.jpg",
    category: "blue",
    aging: "2 месяца",
    weight: "250г",
  },
  {
    id: "5",
    name: "Фермерский Моцарелла",
    description: "Свежий итальянский сыр из буйволиного молока, нежная текстура",
    price: 720,
    image: "/fresh-mozzarella-burrata-water.jpg",
    category: "fresh",
    aging: "свежий",
    weight: "220г",
  },
  {
    id: "6",
    name: "Трюфельный Пекорино",
    description: "Твёрдый овечий сыр с кусочками чёрного трюфеля, эксклюзивный вкус",
    price: 1500,
    image: "/truffle-pecorino-cheese-black-truffle-slices.jpg",
    category: "hard",
    aging: "4 месяца",
    weight: "280г",
  },
]

const initialState: CatalogState = {
  items: mockCheeses,
  filteredItems: mockCheeses,
  selectedCategory: null,
}

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload
      if (action.payload === null) {
        state.filteredItems = state.items
      } else {
        state.filteredItems = state.items.filter((item) => item.category === action.payload)
      }
    },
  },
})

export const { filterByCategory } = catalogSlice.actions
export default catalogSlice.reducer
