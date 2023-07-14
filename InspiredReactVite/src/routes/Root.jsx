import { Outlet } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import { Main } from "../Components/Layout/Main/Main"

import { categories } from "./Consts";


export const Root = () => {
  return (
    <>
      <Header categories={categories}/>
      <Main >
        <Outlet />
      </Main>
      <Footer categories={categories}/>
    </>
  )
}