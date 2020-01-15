import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ title, children }) => {
    return (
        <>
            <h1 className="display-4 text-center">{title}</h1>
            <p className="lead text-center">{children}</p>
        </>
    )
}

export { H1 };

H1.propTypes = {
    title: PropTypes.string
};
