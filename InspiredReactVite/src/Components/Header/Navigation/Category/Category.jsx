import { NavLink } from '../NavLink';
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

export const Category = ({gender='women'}) => {
  
  /*
  const category = {
    'women': [
      'Куртки',
      'Джинсы',
      'Брюки',
      'Рубашки',
      'Толстовки',
      'Футболки',
    ],
    'men': [
      'Джинсы',
      'Носки',
      'Халаты',
      'Термобелье',
    ],
  }
  */
  
  return (
    <ul className={cn(s.category, "category")}>
      {categories[gender].list.map(cat => (
        <li className={cn(s.item, "item")}>
          <NavLink key={cat.slug} link={cat.slug} classes={cn(s.link, "link")} text={cat.title} />
        </li>
      ))}
    </ul>
  );
}