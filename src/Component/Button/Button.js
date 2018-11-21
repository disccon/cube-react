import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children,classButton,position,handleClick}) =>(
    <button type="button" className={classButton} style={position} onClick={handleClick}>
        {children}
    </button>
);

// Button.propTypes = {
//     cells: PropTypes.array.isRequired,
// };


export default Button;