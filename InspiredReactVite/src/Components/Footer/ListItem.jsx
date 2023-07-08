import s from './Footer.module.scss';

export const ListItem = ( props ) => (
  <li>
    <a href={props.href} className={s.link}>
      {props.text}
    </a>
  </li>
)