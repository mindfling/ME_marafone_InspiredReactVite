import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from "classnames";
import { useSelector } from 'react-redux';


export const Gender = ({ list }) => {
  const gender = useSelector(state => state.navigation.activeGender);
  // todo here next
  return (
    <ul className={cn(s.gender, "gender")}>
      {Object.keys(list).map(gen => (
        console.log('gen Gender', gen),
        <li key={gen} className={s.item}>
          <NavLink className={({ isActive }) => cn(s.link, isActive && s.linkActive)} to={gen}>
            {list[gen].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
