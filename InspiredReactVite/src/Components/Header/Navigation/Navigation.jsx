import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

import { Container } from "../../Layout/Container/Container";

export const Navigation = () => (
  <nav className="navigation">
    <Container>
      <Gender />
      <Category />
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
