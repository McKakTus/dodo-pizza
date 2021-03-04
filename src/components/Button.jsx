import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, secondary, children }) => {
    return (
        <button onClick={onClick} className={classNames('button', className, {
            'button--outline': outline,
            'button--secondary': secondary,
        })}>
            {children}
        </button>
    );
}

export default Button;