import { NavLink, useLocation } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';


// const location = useLocation();
// const gender = location.pathname.split('/')[1] || 'women';

export const Category = ({ cats }) => {
  const activeGender = useSelector((state) => state.navigation.activeGender);

  return (
    <ul className={cn(s.category, 'category')}>
      {cats[activeGender].list.map((item) => (
        <li key={item.slug} className={s.item}>
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
