import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";
import { Container } from "../../Layout/Container/Container";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import s from './Navigation.module.scss';
import cn from "classnames";


export const Navigation = ({ categories }) => {
  // определяем gender по location в адресной строке
  const location = useLocation();
  const gender = location.pathname.split('/')[1];

  return (
    <nav className={cn(s.navigation, "navigation")} >
      <Container>
        <Gender categories={categories}/>
        <Category categories={categories} gender={gender}/>
      </Container>
    </nav>
  )
}