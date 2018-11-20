import React from 'react';
import PropTypes from 'prop-types';

const  TableCell = ({cells}) => (
    <tbody>
        {cells}
   </tbody>
);
TableCell.propTypes = {
    cells: PropTypes.array.isRequired,
};

TableCell.defaultProps = {
    cells: [<tr><td></td><td></td><td></td><td></td></tr>,<tr><td></td><td></td><td></td><td></td></tr>,<tr><td></td><td></td><td></td><td></td></tr>,<tr><td></td><td></td><td></td><td></td></tr>],

};

export default TableCell;