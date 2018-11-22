import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children,classButton,position,handleClick}) =>(
    <button type="button" className={classButton} style={position} onClick={handleClick}>
        {children}
    </button>
);

// Button.propTypes = {
//     position: PropTypes.object.isRequired,
//     handleClick: PropTypes.func.isRequired,
//     children: PropTypes.string,
//     classButton: PropTypes.string,
//
// };


export default Button;