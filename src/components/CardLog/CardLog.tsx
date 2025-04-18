import CardLogProps from "../../utils/interfaces"
import styles from './CardLog.module.sass'

export function CardLog({ id, title, content, tags }: CardLogProps) {
    return (
        <article className={styles.article} key={id}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.tagsContainer}>
                {tags.map((tag, index) => (
                    <span className={styles.tags} key={index}>{tag}</span>
                ))}
            </div>
            <p className={styles.text}>{content.length > 50 ? `${content.substring(0, 50)}...` : content}</p>
        </article>
    )
}