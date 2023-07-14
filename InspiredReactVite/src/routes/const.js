// URLs:
// API server url
export const API_URL = 'http://localhost:8024';
// others API
export const GOODS_URL = `${API_URL}/api/goods` // получить список всех товаров с пагинацией
export const CATEGORY_URL = `${API_URL}/api/categories` // получить список категорий
export const COLORS_URL = `${API_URL}/api/colors` // получить список цветов


// temp test cats
export const categories = {
  "women": {
    "title": "Женское",
    "list": [
      {
        "title": "Бюстгальтеры",
        "slug": "bras"
      },
      {
        "title": "Носки",
        "slug": "socks"
      },
      {
        "title": "Халаты",
        "slug": "bathrobes"
      },
      {
        "title": "Пижамы",
        "slug": "pijamas"
      },
      {
        "title": "Термобельё",
        "slug": "thermal"
      }
    ]
  },
  "men": {
    "title": "Мужское",
    "list": [
      {
        "title": "Халаты",
        "slug": "bathrobes"
      },
      {
        "title": "Носки",
        "slug": "socks"
      },
      {
        "title": "Термобельё",
        "slug": "thermal"
      },
      {
        "title": "Рубашки",
        "slug": "shirts"
      },
      {
        "title": "Джинсы",
        "slug": "jeans"
      }
    ]
  }
}
