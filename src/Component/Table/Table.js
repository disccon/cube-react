import React from 'react';
import PropTypes from 'prop-types';

const  Table = ({children,styleSize}) => (
    <table className="table">
        <tbody>
            {children.map((trList) => {
                return <tr>
                        {trList.map((tdList) => {
                            return <td style={styleSize}>{tdList}</td>
                        })
                        }
                </tr>
            })
            }
        </tbody>
    </table>
);
// Table.propTypes = {
//     cells: PropTypes.array.isRequired,
// };


export default Table;