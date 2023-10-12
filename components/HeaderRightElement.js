import styles from "../styles/HeaderRightElement.module.css";

export default function HeaderRightElement({ name, value, uriScheme }) {
    return (
        <div>
            <p className={styles.name}>{name.toUpperCase()}</p>
            <a href={uriScheme ? `${uriScheme}:${value}` : '#'} className={styles.value}>{value}</a>
        </div>
    )
}