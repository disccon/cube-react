import React from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid/v4";

const  Table = ({children,styleSize}) => (
    <table className="table">
        <tbody>
            {children.map((trList) => {
                return <tr key={uuid()}>
                        {trList.map((tdList) => {
                            return <td key={uuid()} style={styleSize}>{tdList}</td>
                        })
                        }
                </tr>
            })
            }
        </tbody>
    </table>
);
// Table.propTypes = {
//     children: PropTypes.array,
//     styleSize: PropTypes.object.isRequired,
//
// };


export default Table;