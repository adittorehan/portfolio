import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SocialButton({ url, faIcon }) {

    return (
        <a href={url} target='_blank'>
            <div
                style={{
                    padding: 10
                }}
            >
                <FontAwesomeIcon icon={faIcon} size={"2xl"} color="#c4cfde" />
            </div>
        </a>
    )
}