import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './Top.module.scss';
import logo from '/src/assets/main-logo.svg';


export const Logo = () => (
  <NavLink className={cn(s.topLink, s.topLogo)} to="/">
    <img className={cn(s.topLogo)} src={logo} alt="Логотип Inspired" title="Логотип Inspired"/>
  </NavLink>
)

// export const Logo = () => (
//   <a className={cn(s.topLink, s.topLogo)} href="/" title="Логотип Inspired">
//     <img className={cn(s.topLogo)} src={logo} alt="Логотип Inspired" />
//   </a>
// )
