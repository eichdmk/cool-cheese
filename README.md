# Premium Cheese Website

Сайт премиальной сыроварни с каталогом авторских сыров ручной работы.

## Технологии

- Next.js 16
- React 19
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Radix UI

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для production
npm run build

# Запуск production сервера
npm start
```

## Деплой на Vercel

1. Подключите репозиторий к Vercel через GitHub/GitLab/Bitbucket
2. Vercel автоматически определит Next.js проект
3. Нажмите "Deploy"

Или используйте Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Структура проекта

- `/app` - Next.js App Router страницы
- `/components` - React компоненты
- `/store` - Redux store и slices
- `/public` - Статические файлы (изображения, иконки)
- `/styles` - Глобальные стили

## Важные файлы

- `next.config.mjs` - Конфигурация Next.js
- `vercel.json` - Конфигурация для Vercel
- `tsconfig.json` - Конфигурация TypeScript

## Решение проблем

### 404 ошибка на Vercel

1. Убедитесь, что все файлы закоммичены в git
2. Проверьте, что `package.json` содержит правильные скрипты
3. Убедитесь, что все изображения находятся в папке `/public`
4. Проверьте логи сборки в Vercel Dashboard

### Проблемы с изображениями

Все изображения должны быть в папке `/public` и использовать абсолютные пути:
- ✅ `/image.jpg`
- ❌ `./image.jpg` или `../image.jpg`
