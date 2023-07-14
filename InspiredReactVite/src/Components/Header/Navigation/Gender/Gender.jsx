import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from "classnames";
import { useSelector } from 'react-redux';


export const Gender = ({ list }) => {
  const activeGender = useSelector(state => state.navigation.activeGender);
  
  return (
    <ul className={cn(s.gender, "gender")}>
      {Object.keys(list).map(gen => (
        <li key={gen} className={s.item}>
          <NavLink className={({ isActive }) => cn(s.link, ( isActive || gen === activeGender) && s.linkActive)} to={gen}>
            {list[gen].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
