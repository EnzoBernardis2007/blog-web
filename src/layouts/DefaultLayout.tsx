import { Navbar } from "../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"

export function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}