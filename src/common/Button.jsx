import React from 'react';

const PrimaryButton = ({ type, children }) => {
    return (
        <button className="btn btn-primary" type={type}>{children}</button>
    )
}

export { PrimaryButton };