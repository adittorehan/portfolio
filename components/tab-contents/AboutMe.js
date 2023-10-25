import styles from "../../styles/AboutMe.module.css";
import Education from "../Education";
import Experience from "../Experience";


export default function AboutMe() {
    return (
        <div className={styles.container}>
            <h1>About Me</h1>
            <p>
                Hello, I'm Aditto Rehan. I graduated in Computer Science and Engineering from Bangladesh Army University of Engineering & Technology in January 2022.
                Right after that, I started working at RightCodes Solution as a software engineer in April 2022, and I'm still part of the team.
                I've been doing web and mobile app development for 1.5+ years using tools like React, Next.js, React Native, and Ruby on Rails.
                I also have knowledge of Java, Kotlin, native Android development, Spring, and Django, although I haven't used them professionally.
                Currently, I'm on the lookout for a new opportunity and I'm available to start immediately.
            </p>

            <br/>

            <h1>Work Experience</h1>
            <Experience />           

            <br/>

            <h1>Education</h1>
            <Education
                logoLink={"/images/bauet-logo.png"} 
                name={"Bangladesh Army University of Engineergin & Technology"}
                cgpa={3.02}
                degree={"B.Sc. in Computer Science & Engineering"}
                startYear={"01/10/2017"}
                endYear={"16/01/2022"}
                location={"Qadirabad Cantonment, Natore"}
            />

            <Education
                logoLink={"/images/college-logo.jpg"} 
                name={"Qadirabad Cantonment Sapper College"}
                degree={"Higher Secondary Certificate"}
                startYear={"01/06/2015"}
                endYear={"01/06/2017"}
                location={"Qadirabad Cantonment, Natore"}
            />
        </div>
    )
}