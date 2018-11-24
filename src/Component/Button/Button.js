import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children,classButton,position,handleClick,minusTop,minusLeft}) =>(
    <button type="button" className={classButton} style={{left: minusTop + 'px',top: minusLeft + 'px'}} onClick={handleClick}>
        {children}
    </button>
);

Button.propTypes = {
    position: PropTypes.object,
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    classButton: PropTypes.string,
};

export default Button;