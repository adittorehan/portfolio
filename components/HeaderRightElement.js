import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/HeaderRightElement.module.css";

export default function HeaderRightElement({ name, value, uriScheme, faIcon }) {
    return (
        <div>
            <p className={styles.name}>{name.toUpperCase()} <FontAwesomeIcon icon={faIcon} size="lg" /></p>
            <a href={uriScheme ? `${uriScheme}:${value}` : '#'} className={styles.value}>{value}</a>
        </div>
    )
}