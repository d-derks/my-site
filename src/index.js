import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import BaseLayout from "./BaseLayout";
import styles from './styles/page.module.scss';
import Stage from "./components/blocks/stage/Stage";
import StageIntro from "./components/blocks/stage/stageIntro/StageIntro";

ReactDOM.render(
  <React.StrictMode>
    <BaseLayout>
        <Stage>
            <StageIntro
                title="I AM"
                text="a frontend developer from Kreuzberg"
            />
        </Stage>
        <div className={`${styles.section} ${styles.isBgBright}`} style={{minHeight: '100%'}}>
            <div className={styles.sectionInner} style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2 className="u_mb-1" style={{margin: 'auto'}}>
                    Intro
                </h2>
            </div>
        </div>
        <div className={styles.section} style={{minHeight: '100%'}}>
            <div className={styles.sectionInner} style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2 style={{margin: 'auto'}}>
                    Projects
                </h2>
            </div>
        </div>
        <div className={`${styles.section} ${styles.isBgBright}`} style={{minHeight: '100%'}}>
            <div className={styles.sectionInner} style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2 style={{margin: 'auto'}}>
                    Skills
                </h2>
            </div>
        </div>
    </BaseLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
