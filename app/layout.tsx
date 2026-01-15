import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/store/providers"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-primary",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
})

export const metadata: Metadata = {
  title: "Авторская Сыроварня | Сыры Ручной Работы",
  description:
    "Премиальные авторские сыры ручной работы из натурального молока. Традиции, качество и забота в каждом кусочке.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${playfairDisplay.variable} ${inter.variable}`} style={{ fontFamily: "var(--font-secondary)" }}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
