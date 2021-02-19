import React from 'react';
import './button.css';

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    
    return (
        <button className={"btn"} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button;