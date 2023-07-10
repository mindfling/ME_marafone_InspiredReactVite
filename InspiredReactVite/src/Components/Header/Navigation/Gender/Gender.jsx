import { NavLink } from '../NavLink';
import s from './Gender.module.scss';
import cn from "classnames";

const list = [
  {
    link: 'women',
    title: 'Женщины',
  },
  {
    link: 'men',
    title: 'Мужчины',
  },
]

export const Gender = ({ active='women' }) => (
  <ul className={cn(s.gender, "gender")}>
    {list.map(item => (
      <li className={cn(s.item, "gender-item")}>
        <NavLink key={item.link} link={item.link} classes={cn("gender-link", ((active === item.link) ? s.linkActive : ''), s.link)} text={item.title}/>
      </li>
    ))}
  </ul>
)
