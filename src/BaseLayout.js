import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from "./components/pageHeader/PageHeader";

function BaseLayout({children}) {
    return (
        <>
            <PageHeader/>
            <main>
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
