import { NavLink } from 'react-router-dom';
import s from '../Footer.module.scss';

export const ListItem = ({ href, text }) => (
  <li>
    <NavLink to={href} className={s.link}>
      {text}
    </NavLink>
  </li>
)