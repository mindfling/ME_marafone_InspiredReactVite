import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";
import { Container } from "../../Layout/Container/Container";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import s from './Navigation.module.scss';
import cn from "classnames";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


export const Navigation = ({ categories }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';
  
  useEffect(() => {
    console.log('use effect', gender)
  }, [location.pathname, dispatch]);
  
  return (
    <nav className={cn(s.navigation, "navigation")} >
      <Container>
        <Gender categories={categories}/>
        <Category categories={categories}/>
      </Container>
    </nav>
  )
}