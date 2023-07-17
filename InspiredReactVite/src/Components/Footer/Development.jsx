import s from './Footer.module.scss';
import cn from 'classnames';

export const Development = ({ designer = {name: 'Anastasia', email: '@Mrshmallowww' },
                              developer = {name: 'Mindfling', email: '@Mindfling'}}) => (
  <div className={s.development}>
    <ul className={s.developmentList}>
      <li>
        <p title="UX/UI designer">Designer:
          <a href={designer.email} className={s.link}>
            &nbsp;{designer.name}
          </a>
        </p>
      </li>
      <li><p title="Web developer">Developer:&nbsp;
        <a href={developer.email} className={s.link}>
          {developer.name}
        </a>
      </p></li>
    </ul>
  </div>
)
