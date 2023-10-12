import styles from "../styles/Tab.module.css";


export default function Tab({ name, selectedTab, handleOnClick }) {
    return (
        <div
            className={styles.container}
            style={name.localeCompare(selectedTab) == 0 ? { backgroundColor: "#f9004d" } : {}}
            onClick={() => handleOnClick(name)}
        >
            <p>{name}</p>
        </div>
    )
}