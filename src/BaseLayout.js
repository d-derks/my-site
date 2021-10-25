import React from 'react';
import PropTypes from 'prop-types';

function BaseLayout({children}) {
    return (
        <main className="main">
            {children}
        </main>
    );
}

export default BaseLayout;

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
