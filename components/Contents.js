import { useState } from "react";

import styles from "../styles/Contents.module.css";
import Tab from "./Tab";
import * as tabContents from "./tab-contents/index.js";

export default function Contents() {
    const [selectedTab, setSelectedTab] = useState("About");
    const tabs = ["About", "Resume", "Work", "Contact"];
    const contentComponents = {
        About: tabContents.AboutMe,
        Resume: tabContents.Resume,
        Work: tabContents.Work,
        Contact: tabContents.Contact,
    }

    const ContentComponent = selectedTab ? contentComponents[selectedTab] : tabContents.AboutMe;
    return (
        <div className={styles.container}>
            <div className={styles.tabsContainer}>
                {
                    tabs.map(
                        tab => <Tab key={tab} name={tab} selectedTab={selectedTab} handleOnClick={setSelectedTab} />
                    )
                }
            </div>

            <div className={styles.contentContainer}>
                <ContentComponent />
            </div>
        </div>
    )
}