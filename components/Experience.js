import Image from "next/image";
import moment from "moment";

import styles from "../styles/Experience.module.css";


export default function Experience() {
    const experiences = [
        {
            id: 1,
            designation: "Jr. Software Engineer",
            company_name: "Rightcodes Solution",
            startDate: "01/04/2022",
            logo: "/images/rc-logo.png",
            endDate: null,
            works: [
                {
                    id: 1,
                    title: "Pick My Brain",
                    overview: "The World's First Knowledge Marketplace",
                    link: "https://www.pickmybrain.world/",
                    role: "",
                    technologies: [],

                },
                {
                    id: 2,
                    title: "TherapyMate",
                    overview: "Practice Management Solution",
                    link: "https://therapymate.org/",
                    role: "",
                    technologies: [],

                },

            ]
        }
    ];

    const Work = ({ experience }) => {
        const formatDate = (date) => moment(date, "DD/MM/YYYY").format("MMM, YYYY")
        return (
            <div className={styles.workContainer}>
            <Image width={100} height={100} src={experience.logo} style={{padding: 8}}/>
            <div className={styles.main}>
                <p>{experience.company_name}</p>
                <div>
                    <p>{experience.designation}</p>                    
                    <p>{experience.location}</p>
                </div>
            </div>
            <p>{formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : "Present"}</p>            
        </div>
        )
    }

    return (
        <div className={styles.container}>
            {
                experiences.map(
                    experience => <Work experience={experience} />
                )
            }
        </div>
    )
}