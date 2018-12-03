import React from 'react';
import PropTypes from 'prop-types';


const Table = ({children,sizeStyle}) => (
    <div className="wrapper">
        <table className="table">
            <tbody>
                {children.map((trLists,index) => {
                    return <tr key={trLists[0]}>
                            {trLists.map((tdList,index) => {
                                return <td key={tdList} style={sizeStyle}>{tdList}</td>
                            })
                            }
                    </tr>
                })
                }
            </tbody>
        </table>
    </div>
);
Table.propTypes = {
    children: PropTypes.array.isRequired,
    styleSize: PropTypes.object.isRequired,

};
Table.defaultProps = {
    styleSize:  {
        width: 50 + "px",
        height: 50 + "px"
    }
};
export default Table;