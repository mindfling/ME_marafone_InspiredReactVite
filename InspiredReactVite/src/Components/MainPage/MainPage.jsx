import { useParams } from 'react-router-dom';
import s from './MainPage.module.scss';
import { Container } from '../Layout/Container/Container';

export const MainPage = ({ gender = 'women'}) => {
  const { category } = useParams();
  
  console.log('gender on mainpage: ', gender);
  console.log('category on mainpage: ', category);

  return (
    <Container>
      <div className="mainpage">MainPage {gender}</div>
      {category && <p>Категория {category}</p>}
    </Container>
  )
}
