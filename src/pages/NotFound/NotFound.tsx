import styles from './NotFound.module.sass'
import { Link } from 'react-router-dom'

export function NotFound() {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <p>Vish... nada aqui...</p>
            <div className={styles.containerLink}>
                <Link to="/" className={styles.link}>Volte para o inicio</Link>
            </div>
        </div>
    )
}