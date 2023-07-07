import { Container } from '../../Layout/Container/Container';
import s from './Top.module.scss';
console.log('style top: ', s);

export const Top = () => (
  <div className={s.top}>
    <Container text='текст' className='header__container'>
      <p>telephone</p>
      <p>logo</p>
      <p>icons</p>
    </Container>
  </div>
)
