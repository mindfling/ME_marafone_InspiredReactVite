import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from "classnames";


export const Gender = ({ categories }) => (
  <ul className={cn(s.gender, "gender")}>
    {Object.keys(categories).map(cat => (
      <li key={cat} className={s.item}>
        <NavLink className={({ isActive }) => cn(s.link, isActive && s.linkActive)} to={cat}>
          {categories[cat].title}
        </NavLink>
      </li>
    ))}
  </ul>
)
