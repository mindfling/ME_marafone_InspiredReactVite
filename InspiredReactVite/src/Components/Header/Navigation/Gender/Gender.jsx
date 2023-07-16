import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from "classnames";
import { useSelector } from 'react-redux';


export const Gender = () => {
  // ?????? state НЕ МЕНЯЕТСЯ ??????
  const {activeGender, genderList, categories} = useSelector(state => state.navigation);
  
  const navState = useSelector(state => state.navigation);
  console.log('navState: ', navState);
  
  console.log('activeGender: ', activeGender);
  console.log('genderList: ', genderList);
  console.log('categories: ', categories);
  return (
    <ul className={cn(s.gender, "gender")}>
      {genderList?.map(gen => (
        <li key={gen} className={s.item}>
          <NavLink className={({ isActive }) => cn(s.link, ( isActive || gen === activeGender) && s.linkActive)} to={gen}>
            {genderList[gen].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
