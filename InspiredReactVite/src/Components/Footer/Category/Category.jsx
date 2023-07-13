import s from '../Footer.module.scss';
import cn from 'classnames';
import { Sublist } from './Sublist';

export const Category = ({ categories }) => {
  const genderList = Object.keys(categories);

  return (
    <div className={s.category}>
      <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
      <ul className={s.categoryList}>
        {genderList.map((gender) => (
          <Sublist key={gender} link={gender} genderCategory={categories[gender]} />
        ))}
      </ul>
    </div>
  );
};
