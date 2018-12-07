import React from 'react';
import './reset.css';
import TableBody from "../TableBody/TableBody";
import Button from "../Button/Button";

import classNames from 'classnames/bind';
import styles from './App.css';
let cx = classNames.bind(styles);


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            table: null,
            initialWidth: 4,
            initialHeight: 4,
            cellSize: 50,
            minusTopDisplay: false,
            minusLeftDisplay: false,
            minusTop: 5,
            minusLeft: 5,
            keyRow: null,
            keyCell: null,
        };
        this.setTimeoutMouseleave = null;
    }
    componentWillMount(){
        this.setState({
            table: this.initialTable(),
        });
    }
    initialTable = () => {
        let table = []
        for (let i = 0; i < this.state.initialHeight; i++) {
            let children = []
            for (let j = 0; j < this.state.initialWidth; j++) {
                children.push({ row: i+1, cell: j+1})
            }
            table.push(children)
        }
        return table;
    }
    addCell = () => {
        const { table } = this.state;
        this.setState({
            table: table.map((trLists) => ([...trLists,{ row: trLists[trLists.length -1].row, cell: trLists[trLists.length -1].cell + 1}]))
        });
    };
    addRow = () => {
        const { table } = this.state;
        this.setState({
            table: [...table, table[table.length -1].map((trLists) => ({row: trLists.row + 1, cell: trLists.cell}))],
        });
    };
    deleteCells = () => {
        const { table, keyCell } = this.state;
        this.setState({
            minusTopDisplay: false,
        });
        const newTableCell = table.map((trLists) => { return trLists.filter((arrIndex, index, arr) => {
            return arrIndex.cell !== keyCell
        }) })
        this.setState({
            table: newTableCell,
        });
    };
    deleteRow = () => {
        const { table, keyRow } = this.state;
        this.setState({
            minusLeftDisplay:  false,
        });
        const newTableRow = table.filter((arrIndex, index, arr) => {
            return arrIndex[0].row !== keyRow
        })
        this.setState({
           table: newTableRow,
        });
    };
    mouseOverTable = ({target}) => {
        clearTimeout(this.setTimeoutMouseleave)
        const { table } = this.state;
        if(table.length > 1){
            this.setState({
                minusLeftDisplay:  true,
            });
        }
        if(table[0].length > 1){
            this.setState({
                minusTopDisplay: true,
            });
        }
        if(target.tagName === "TD"){
            this.setState({
                minusTop: target.offsetLeft + 3,
                minusLeft: target.offsetTop + 3,
                keyRow: Number(target.parentElement.getAttribute('keys')),
                keyCell: Number(target.getAttribute('keys')),
            });
        }
    };
    leaveTable = () => {
        this.setTimeoutMouseleave = setTimeout(() => {
            this.setState({
                minusTopDisplay: false,
                minusLeftDisplay: false,
            });
        }, 3000);
    };
    render() {
        const { minusTopDisplay, minusLeftDisplay, cellSize, minusTop, minusLeft, table } = this.state;
        return (
            <div className={cx('block-table')}>
                <div className={cx('wrapper-table')} onMouseLeave={this.leaveTable} onMouseOver={this.mouseOverTable}>
                    <Button minusTopDisplay={minusTopDisplay} cellSize={cellSize}
                            minusTop={minusTop} handleClick={this.deleteCells}>
                        <span>-</span>
                    </Button>
                    <Button minusLeftDisplay={minusLeftDisplay} cellSize={cellSize}
                            minusLeft={minusLeft} handleClick={this.deleteRow}>
                        <span>-</span>
                    </Button>
                    <TableBody cellSize={cellSize}>
                        {table}
                    </TableBody>
                </div>
                <Button classButton="button-plus button-plus_right" cellSize={cellSize}
                        handleClick={this.addCell}>
                    <span>+</span>
                </Button>
                <Button classButton="button-plus button-plus_bottom" cellSize={cellSize}
                        handleClick={this.addRow}>
                    <span>+</span>
                </Button>
            </div>
        )
    }
}
