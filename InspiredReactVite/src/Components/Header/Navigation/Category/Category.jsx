import { NavLink, useLocation } from 'react-router-dom';
import s from './Category.module.scss';
import cn from "classnames";


export const Category = ({categories}) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  return (
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
}
