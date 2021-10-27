import React from 'react';
import styles from './menuButton.module.scss'
import PropTypes from "prop-types";
import classNames from "classnames";

const MenuButton = ({menuOpen, handleOnClick, className}) => {
    const blockClass = classNames(styles.host, className);

    return (
        <button
            className={blockClass}
            type="button"
            title='show menu'
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={handleOnClick}
        >
          <span className={`${styles.inner} menu-button`}>
            <span className={`${styles.text} menu-button`}>
              Press for menu
            </span>
          </span>
        </button>
    );
};

export default MenuButton;

MenuButton.propTypes = {
    handleOnClick: PropTypes.func,
    menuOpen: PropTypes.bool,
    className: PropTypes.string,
};
