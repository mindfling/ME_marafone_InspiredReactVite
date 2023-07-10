import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

import { Container } from "../../Layout/Container/Container";

import s from './Navigation.module.scss';
import cn from "classnames";

export const Navigation = () => (
  <nav className={cn(s.navigation, "navigation")} >
    <Container>
      <Gender />
      <Category gender="women"/>
    </Container>
  </nav>
)

// export const Navigation = () => (
//   <nav className="navigation">
//     <div className="container">
//       <Gender />
//       <Category />
//     </div>
//   </nav>
// )
