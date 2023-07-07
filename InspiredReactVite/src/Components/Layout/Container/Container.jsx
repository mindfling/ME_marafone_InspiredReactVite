// react plugin classnames
import cn from 'classnames'
// import './Container.scss'
import style from './Container.module.scss';
console.log('style container: ', style);

export const Container = (props) => (
  <>
  <div className={cn(style.container, props.className)}>
    {props.children}
  </div>
  </>
)