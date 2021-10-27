import React, {useState} from 'react';
import classNames from "classnames";
import MenuButton from './menuButton/MenuButton';
import styles from './pageHeader.module.scss';

const PageHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const blockClass = classNames(styles.host, {
        [styles.isMenuVisible]: menuOpen
    });

    return (
        <header className={blockClass}>
            <MenuButton
                className={styles.button}
                menuOpen={menuOpen}
                handleOnClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            />
        </header>
    );
};

export default PageHeader;
