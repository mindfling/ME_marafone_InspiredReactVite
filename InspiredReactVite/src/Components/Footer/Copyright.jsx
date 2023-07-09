import s from './Footer.module.scss';

export const Copyright = ({year = 2000}) => (
  <div className={s.copyright}>
    <p>&copy;&nbsp;INSPIRED,&nbsp;{year}</p>
  </div>
)
