import s from '../Footer.module.scss';
import { ListItem } from './ListItem';

export const Sublist = ({ gender, link }) => (
  <li>
    <h3 className={s.categorySubtitle}>
      <a href={link} className={s.link}>
        {gender.title}
      </a>
    </h3>
    <ul className={s.categorySublist}>
      {gender.list.map((item) => <ListItem text={item.title} href={item.slug}/> )}
    </ul>
  </li>
)
