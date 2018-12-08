import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.scss';
const cx = classNames.bind(styles);



const Button = ({children,classButton,handleClick,minusTop,minusLeft,cellSize,minusTopDisplay,minusLeftDisplay}) => {
    const classButtonProps = cx({
        [classButton]:classButton,
        'button-minus button-minus_top': minusTopDisplay === false,
        'button-minus button-minus_top button-minus_animation-display': minusTopDisplay,
        'button-minus button-minus_left': minusLeftDisplay === false,
        'button-minus button-minus_left button-minus_animation-display': minusLeftDisplay,
    });
    return <button type="button" className={classButtonProps}
            style={{left: `${minusTop}px`, top: `${minusLeft}px`, width: `${cellSize}px`, height: `${cellSize}px`}}
            onClick={handleClick}>
        {children}
    </button>
};

Button.propTypes = {
    position: PropTypes.object,
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    classButton: PropTypes.string,
};

export default Button;