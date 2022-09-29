import React from 'react';
import styles from "./MyReports.module.css"

const MyReports = () => {
    return (
        <div className={styles.content}>
            <header>
                <div>
                    AK
                </div>
                <div>
                    Anatoliy Kolodkin
                </div>
                <div>
                    email@email.com
                </div>
            </header>
            <div className={styles.container}>
                <h2>past weekly reports</h2>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default MyReports;
