import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/page.module.scss';

function BaseLayout({children}) {
    return (
       <>
           <header style={{position: 'fixed', top:'0', backgroundColor: '#f1f1f1', width: '100%'}}>
               <div style={{minHeight: '8rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                   <h2 style={{margin: 'auto'}}>
                       Header
                   </h2>
               </div>
           </header>
           <main className={styles.main}>
               {children}
           </main>
           <footer style={{minHeight: '100vh'}}>
               <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                   <h2 style={{margin: 'auto'}}>
                       Footer
                   </h2>
               </div>
           </footer>
       </>
    );
}

export default BaseLayout;

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
