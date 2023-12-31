import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from "classnames";
import { useSelector } from 'react-redux';


export const Gender = () => {
  const {activeGender, genderList, categories} = useSelector(state => state.navigation);
  
  return (
    <ul className={cn(s.gender, "gender")}>
      {genderList.map(gen => (
        <li key={gen} className={s.item}>
          <NavLink className={({ isActive }) => cn(s.link, ( isActive || gen === activeGender) && s.linkActive)} to={gen}>
            {categories[gen].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
