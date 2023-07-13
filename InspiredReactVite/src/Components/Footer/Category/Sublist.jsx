import { NavLink } from 'react-router-dom';
import s from '../Footer.module.scss';
import { ListItem } from './ListItem';

export const Sublist = ({ genderCategory, link }) => {
  // console.log('genderCategory: ', genderCategory);

  return (
    <li key={link}>
      <h3 className={s.categorySubtitle}>
        <NavLink to={link} className={s.link}>
          {genderCategory.title}
        </NavLink>
      </h3>
      <ul className={s.categorySublist}>
        {genderCategory.list.map((item) => (
          <ListItem key={item.slug} text={item.title} href={`${link}/${item.slug}`}/>
        ))}
      </ul>
    </li>
  );
};
