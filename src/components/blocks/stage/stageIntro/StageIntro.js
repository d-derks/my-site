import React from 'react';
import styles from "./stageIntro.module.scss";

const StageIntro = () => {
    return (
        <header className={styles.host}>
            <h1 className={styles.title}>
               <span className={`${styles.titleText} ${styles.isSizeXl}`}>
                   I am
               </span>
                <span className={styles.titleText}>
                   a frontend developer from Kreuzberg
                </span>
            </h1>
        </header>
    );
};

export default StageIntro;
