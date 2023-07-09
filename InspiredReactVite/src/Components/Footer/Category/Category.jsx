import s from '../Footer.module.scss';
import cn from 'classnames';
import { Sublist } from './Sublist';

export const Category = ({ categories }) => (
  <div className={s.category}>
    <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
    
    <ul className={s.categoryList}>
      {Object.keys(categories).map(genderKey => (
        <Sublist link={genderKey} gender={categories[genderKey]} />
      ))}
    </ul>
  </div>
)
