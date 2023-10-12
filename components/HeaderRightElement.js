import styles from "../styles/HeaderRightElement.module.css";

export default function HeaderRightElement({ name, value }) {
    return (
        <div>
            <p className={styles.name}>{name.toUpperCase()}</p>
            <p className={styles.value}>{value}</p>
        </div>
    )
}