import styles from './NotFound.module.sass'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'

export function NotFound() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1>404</h1>
                <p>Vish... nada aqui...</p>
                <div className={styles.containerLink}>
                    <Link to="/" className={styles.link}>Volte para o inicio</Link>
                </div>
            </div>
        </>
        
    )
}