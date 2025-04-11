import styles from './Footer.module.sass'
import { FaSquareGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <div className={styles.info}>
                    <h2>Sobre o site</h2>
                    <p>
                        Este site foi criado com o intuito de fazer postagens sobre os meus projetos
                    </p>
                </div>
                <div className={styles.containerSocialMedia}>
                    <p>Me siga</p>
                    <div className={styles.socialLinks}>
                        <a
                        href="https://github.com/seuusuario"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Github"
                        > <FaSquareGithub className={styles.icons} /> Github
                        </a>
                        <a
                        href="https://linkedin.com/in/seuusuario"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        > <FaLinkedin className={styles.icons} /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <p>© {new Date().getFullYear()} Enzo Bernardis</p>
                <p>Feito por mim mesmo!</p>
            </div>
        </footer>
    )
}
