import s from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/main-logo.svg';


export const Logo = () => (
  <a className={cn(s.topLink, s.topLogo)} href="/" title="Логотип Inspired">
    <img className={cn(s.topLogo)} src={logo} alt="Логотип Inspired" />
  </a>
)
