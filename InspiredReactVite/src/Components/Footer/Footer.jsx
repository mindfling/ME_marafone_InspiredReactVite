import s from './Footer.module.scss';
import cn from 'classnames';

// import { Container } from 'src/Components/Layout/Container/Container';
import { Container } from '../Layout/Container/Container';
import { Contacts } from './Contacts';
import { Copyright } from './Copyright';
import { Development } from './Development';
import { Social } from './Social';
import { Sublist } from './Category/Sublist';
import { Category } from './Category/Category';


export const Footer = ({ categories }) => (
  <footer className={"footer"}>
    <Container className={cn(s.container)}>
      <Category />
      <Social />
      <Contacts />
      <Copyright year="2023"/>
      <Development 
        designer={{name: 'Anastasia Ilina', email: 'mrshmallowww@gmail.com'}} 
        developer={{name: "Mindfling React+Vite", email: 'mindfling@gmail.com'}}
      />
    </Container>
  </footer>
)
