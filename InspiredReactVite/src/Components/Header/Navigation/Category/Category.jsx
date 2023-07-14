import { NavLink, useLocation } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';


export const Category = ({ categories }) => {
  // const location = useLocation();
  // const gender = location.pathname.split('/')[1] || 'women';
  const activeGender = useSelector((state) => state.navigation.activeGender);

  return (
    <ul className={cn(s.category, 'category')}>
      {categories[activeGender].list.map((item) => (
        <li key={item.slug} className={cn(s.item, 'item')}>
          <NavLink
            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
            to={`${activeGender}/${item.slug}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
