import Image from "next/image";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


import styles from "../styles/Heading.module.css";
import SocialButton from "./SocialButton";
import HeaderRightElement from "./HeaderRightElement";

export default function Heading() {
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Image
                        className={styles.headerImage}
                        src="/images/profile.png"
                        alt="Profile picture"
                        width={240}
                        height={260}
                        priority
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div className={styles.headerIntro}>
                            <h1>Aditto Rehan</h1>
                            <p style={{ textAlign: "justify" }}>As a Software Engineer with 1.5+ years of experience in web and mobile app development, my goal is to contribute my skills to a forward-thinking team. I'm passionate about using technology to solve real-world problems and eager to continue learning and growing in a dynamic work environment.</p>
                        </div>
                        <div className={styles.socialButtons}>
                            <SocialButton url="https://www.linkedin.com/in/adittorehan/" faIcon={faLinkedin} />
                            <SocialButton url="https://github.com/adittorehan" faIcon={faGithub} />
                        </div>
                    </div>
                </div>

                <div style={{ width: 1, margin: "0 30px" }} className="separator" />

                <div className={styles.headerRight}>
                    <HeaderRightElement
                        name={"Email"}
                        value={"adittorehanshaju@gmail.com"}
                        uriScheme={"mailto"}
                    />
                    <hr style={{ height: 1 }} className="separator" />
                    <HeaderRightElement
                        name={"Phone"}
                        value={"+8801892445308"}
                        uriScheme={"tel"}
                    />
                </div>

            </div>
        </div>
    )
}