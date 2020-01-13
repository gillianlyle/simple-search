import React from 'react';

const Input = ({ type, value, onchange, placeholder, ariaLabel }) => {
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

export default Input;