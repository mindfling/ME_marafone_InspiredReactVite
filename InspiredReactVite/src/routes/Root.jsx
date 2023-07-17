import { Outlet } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import { Main } from "../Components/Layout/Main/Main"

import { categories } from "./const";
import { fetchNavigation } from "../features/navigationSlice";


export const Root = () => {
  return (
    <>
      <Header />
      <Main >
        <Outlet />
      </Main>
      <Footer categories={categories}/>
    </>
  )
}