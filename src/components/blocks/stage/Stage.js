import React from 'react';
import PropTypes from "prop-types";
import styles from './stage.module.scss'

const Stage = ({children}) => {
    return (
        <div className={styles.host}>
            <div className={styles.inner}>
                {children}
            </div>
        </div>
    );
};

export default Stage;

Stage.propTypes = {
    children: PropTypes.node,
};
