import React from 'react';

export const Input = ({ type, value, onchange, placeholder, ariaLabel }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onchange}
            className="form-control"
            placeholder={placeholder}
            aria-label={ariaLabel}
            required
        />
    )
}

export const PrimaryButton = ({ type, children }) => {
    return (
        <button className="btn btn-primary" type={type}>{children}</button>
    )
}
