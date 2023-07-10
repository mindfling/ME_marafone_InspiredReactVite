import s from './Footer.module.scss';
import cn from 'classnames';

// import { Container } from 'src/Components/Layout/Container/Container';
import { Container } from '../Layout/Container/Container';
import { Contacts } from './Contacts';
import { Copyright } from './Copyright';
import { Development } from './Development';
import { Social } from './Social';
import { Sublist } from './Category/Sublist';
import { Category } from './Category/Category';

// export const categoryList = {
//   'women': [
//     'Куртки',
//     'Джинсы',
//     'Брюки',
//     'Рубашки',
//     'Толстовки',
//     'Футболки',
//   ],
//   'men': [
//     'Джинсы',
//     'Носки',
//     'Халаты',
//     'Термобелье',
//   ],
// }

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

export const Footer = () => (
  <footer className={"footer"}>
    <Container className={cn(s.container)}>
      <Category categories={categories}/>
      <Social />
      <Contacts />
      <Copyright year="2023"/>
      <Development 
        designer={{name: 'Anastasia Ilina', email: 'mrshmallowww@gmail.com'}} 
        developer={{name: "Mindfling React+Vite", email: 'mindfling@gmail.com'}}
      />
    </Container>
  </footer>
)
