import React from 'react'
import TableCell from "./TableCell";
import uuid from 'uuid/v4';
import {
    compose,
    mapProps,
    withProps,
} from 'recompose';


const  createTable = (props) => {
    let table = []
    let sizeStyle = {
        width: props.sizeCell + "px",
        height: props.sizeCell + "px"
    };
    for (let i = 0; i < props.heightRows ; i++) {
        let children = []
        for (let j = 0; j < props.widthRows; j++) {
            children.push(<td key={uuid()} style={sizeStyle}></td>)
        }
        table.push(<tr key={uuid()}>{children}</tr>)
    }
    return table
}

const withTableCell = compose(
    withProps((props) => ({
       cells: createTable(props)
    })),
);

export default compose(withTableCell)(TableCell);