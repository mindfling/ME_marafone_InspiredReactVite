import { NavLink, useLocation } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';


// const location = useLocation();
// const gender = location.pathname.split('/')[1] || 'women';

export const Category = () => {
  // const activeGender = useSelector((state) => state.navigation.activeGender);
  // const { activeGender, genderList, categories } = useSelector(state => state.navigation);
  const activeGender = useSelector(state => state.navigation.activeGender);
  const categories = useSelector(state => state.navigation.categories);

  return (
    <ul className={s.category}>
      {categories[activeGender]?.list.map((item) => (
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
