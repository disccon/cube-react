import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Button.css';

let cx = classNames.bind(styles);

// const classButtonProps = cx({
//     [classButton]: true,
// });

const Button = ({children,classButton,handleClick,minusTop,minusLeft,cellSize}) =>(
    <button type="button" className={classButton}
            style={{left: `${minusTop}px`,top: `${minusLeft}px`, width: `${cellSize}px`, height: `${cellSize}px` }}
            onClick={handleClick}>
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