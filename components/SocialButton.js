import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "../styles/SocialButton.module.css";


export default function SocialButton({ url, faIcon }) {

    return (
        <a href={url} target='_blank'>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faIcon} size={"2xl"} color="#c4cfde" />
            </div>
        </a>
    )
}