import { categories } from './Footer';
import s from './Footer.module.scss';
import { ListItem } from './ListItem';

export const Sublist = ({ gender }) => (
  <li>
    <h3 className={s.categorySubtitle}>
      <a href="#" className={s.link}>
        {gender.title}
      </a>
    </h3>
    <ul className={s.categorySublist}>
      {gender.list.map((item) => <ListItem text={item.title} href={item.slug}/> )}
    </ul>
  </li>
)
