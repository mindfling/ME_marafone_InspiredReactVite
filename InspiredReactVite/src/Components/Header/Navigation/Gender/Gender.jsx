import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from "classnames";
import { useSelector } from 'react-redux';


export const Gender = ({ cats }) => {
  const activeGender = useSelector(state => state.navigation.activeGender);
  
  return (
    <ul className={cn(s.gender, "gender")}>
      {Object.keys(cats).map(gen => (
        <li key={gen} className={s.item}>
          <NavLink className={({ isActive }) => cn(s.link, ( isActive || gen === activeGender) && s.linkActive)} to={gen}>
            {cats[gen].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
