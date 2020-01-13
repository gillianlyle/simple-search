import React from 'react';

const AlertDanger = ({ children }) => {
    return (
        <div className="alert alert-danger" role="alert">
            {children}
        </div>
    )
}

const AlertInfo = ({ children }) => {
    return (
        <div className="alert alert-info" role="alert">
            {children}
        </div>
    )
}

const AlertWarning = ({ children }) => {
    return (
        <div className="alert alert-warning" role="alert">
            {children}
        </div>
    )
}


export { AlertDanger, AlertInfo, AlertWarning }