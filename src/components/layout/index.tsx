import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import BackToTop from "../ux/backtop"

export const Layout = () => {
    return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
          <BackToTop/>
        </>
    )
}