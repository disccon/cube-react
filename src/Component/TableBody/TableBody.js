import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './TableBody.css';

let cx = classNames.bind(styles);

// const wrapper = cx({
//     wrapper: true,
// });

// const table = cx({
//     table: true,
// });

const TableBody = ({children,cellSize})=> (
    <div className="wrapper">
        <table className="table">
            <tbody>
                {children.map((trLists) => {
                    return <tr key={trLists[0].row} keys={trLists[0].row}>
                            {trLists.map((tdList) => {
                                return <td key={tdList.cell} keys={tdList.cell}
                                           style={{width: `${cellSize}px`, minWidth: `${cellSize}px`, height: `${cellSize}px`}}>
                                                {tdList.row}.{tdList.cell}
                                       </td>
                            })
                            }
                    </tr>
                })
                }
            </tbody>
        </table>
    </div>
);
TableBody.propTypes = {
    children: PropTypes.array.isRequired,
    styleSize: PropTypes.object.isRequired,
};
TableBody.defaultProps = {
    styleSize:  {
        width: "50px",
        height: "50px",
    }
};
export default TableBody;