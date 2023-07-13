import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";

export const Header = ({ categories }) => (
  <header className="header">
    <Top/>
    <Navigation categories={categories}/>
  </header>
)
