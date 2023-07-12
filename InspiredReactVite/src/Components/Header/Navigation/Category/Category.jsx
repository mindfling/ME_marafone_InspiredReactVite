import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';
import cn from "classnames";

export const categories = {
  "women": {
    "title": "Женское",
    "list": [
      {
        "title": "Бюстгальтеры",
        "slug": "bras"
      },
      {
        "title": "Трусы",
        "slug": "panties"
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
        "title": "Термобельё",
        "slug": "thermal"
      },
      {
        "title": "Пижамы",
        "slug": "pijamas"
      }
    ]
  },
  "men": {
    "title": "Мужское",
    "list": [
      {
        "title": "Нижнее бельё",
        "slug": "underwear"
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
        "title": "Термобельё",
        "slug": "thermal"
      }
    ]
  }
};

export const Category = ({gender='women'}) => (
  <ul className={cn(s.category, "category")}>
    {categories[gender].list.map(item => (
      <li key={item.slug} className={cn(s.item, "item")}>
        <NavLink className={({ isActive }) => cn(s.link, isActive && s.linkActive)} to={`${gender}/${item.slug}`}>
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
)