import moment from "moment";
import styles from "../styles/Education.module.css";
import Image from "next/image";

export default function Education({ logoLink, name, degree, cgpa, startYear, endYear, location}) {
    const formatDate = (date) => moment(date, "DD/MM/YYYY").format("MMM, YYYY")
    
    return (
        <div className={styles.container}>
            <Image width={100} height={100} src={logoLink} style={{padding: 8}}/>
            <div className={styles.main}>
                <p>{name}</p>
                <div className={styles.educationDetails}>
                    <p>{degree}{cgpa ? `, CGPA: ${cgpa}` : ''}</p>                    
                    <p>{location}</p>
                </div>
            </div>
            <p>{formatDate(startYear)} - {formatDate(endYear)}</p>            
        </div>
    )
}