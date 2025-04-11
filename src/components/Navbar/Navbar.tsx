import style from './Navbar.module.sass'
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav>
            <div className={style.container}>
                <Link className={style.link} to="/">Home</Link> 
            </div>
            <div className={style.container}>
                <Link className={style.link} to="/">Posts</Link> 
            </div>
            <div className={style.container}>
                <Link className={style.link} to="/about">Sobre</Link>
            </div>
        </nav>
    )
}