import React from 'react';
import Stage from "./components/blocks/stage/Stage";
import StageIntro from "./components/blocks/stage/stageIntro/StageIntro";
import styles from "./styles/page.module.scss";
import ItemScroller from "./components/common/itemScroller/ItemScroller";
import {times} from "lodash";
import lorem from './utils/Lorem';
import Mediabox from "./components/common/mediabox/Mediabox";

const HomePage = () => {

    return (
        <>
            <Stage>
                <StageIntro
                    title="I AM"
                    text="a frontend developer from Kreuzberg"
                />
            </Stage>
            <div className={`${styles.section} ${styles.isBgBright} u_pt-10`}>
                <div className={styles.sectionInner}
                     style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h2 className="u_mb-1" style={{margin: 'auto'}}>
                        Intro
                    </h2>
                </div>
            </div>
            <div className={`${styles.section} ${styles.isBgBright} ${styles.isMaxWidthL}`}>
                <div className={styles.sectionInner}>
                    <ItemScroller>
                            {
                                times(6, (index) => (
                                    <Mediabox
                                        key={index}
                                        img={lorem.image(1180, 500)}
                                        ratio='16-7'
                                        alt=''
                                    />
                                ))
                            }
                    </ItemScroller>
                </div>
            </div>
            <div className={`${styles.section} ${styles.isBgBright}`} style={{minHeight: '100%'}}>
                <div className={styles.sectionInner}
                     style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h2 style={{margin: 'auto'}}>
                        Skills
                    </h2>
                </div>
            </div>
        </>
    );
};

export default HomePage;
