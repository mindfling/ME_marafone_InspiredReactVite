import s from './Footer.module.scss';

export const Contacts = () => (
  <div className={s.contacts}>
    <div className='email'>
      <a href="mailto:Inspired@gmail.com" className={s.link}>Inspired@gmail.com</a>
    </div>
    <div className='tel'>
      <a href="tel:89304902620" title="позвонить нам 8 (930) 490-26-20" className={s.link}>8&nbsp;930&nbsp;490&nbsp;26&nbsp;20</a>
    </div>
  </div>
)
