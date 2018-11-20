import React from 'react'
import App from "./App";
import uuid from 'uuid/v4';
import {
    compose,
    withState,
    branch,
    withHandlers,
    renderComponent,
    mapProps,
    lifecycle,
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

const withApp = compose(
    withState('initialWidth','setinitialWidth',4),
    withState('initialHeight','setinitialHeight',4),
    withState('cellSize','setcellSize',50),
    mapProps((props) => ({
        cells: createTable(props)
    })),
);

export default compose(withApp)(App);