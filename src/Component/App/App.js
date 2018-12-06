import React from 'react';
import './reset.css';
import TableBody from "../TableBody/TableBody";
import Button from "../Button/Button";

import classNames from 'classnames/bind';
import styles from './App.css';
let cx = classNames.bind(styles);

let setTimeoutMouseleave;
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
            table: table.map((trLists) => { return[...trLists,{ row: trLists[trLists.length -1].row, cell: trLists[trLists.length -1].cell + 1}] })
        });
    };
    addRow = () => {
        const { table } = this.state;
        //table: [...table, [...table[table.length -1],{row: table[table.length -1].row + 1, cell: table[table.length -1].cell}]]
        this.setState({
            table: [...table, table[table.length -1].map((trLists) => { return{ row: trLists.row + 1, cell: trLists.cell}})]
        });
    };
    deleteCells = () => {
        const { table } = this.state;
        const { keyCell } = this.state;
        const { cellSize } = this.state;
        const tableCellLength = this.state.table[0].length;
        let tableWidth = tableCellLength * (cellSize + 2) + 3 - cellSize
        if(tableCellLength <= 2) {
            this.setState({
                minusTopDisplay: false,
            });
        }
        const indexCell = (this.state.minusTop - 5) / (cellSize + 2);
        let newKey;
        if( indexCell === (tableCellLength - 1) && tableCellLength > 1){
            newKey = table[0][indexCell -1].cell
        }
        if( indexCell < (tableCellLength -1)){
            newKey = table[0][indexCell +1].cell
        }
        if(tableCellLength > 1) {
            let newTableCell = table.map((trLists) => { return trLists.filter((arrIndex, index, arr) => {
                return arrIndex.cell !== keyCell
            }) })
            this.setState({
                table: newTableCell,
                keyCell: newKey,
            });
            if(this.state.minusTop >= tableWidth){
                this.setState({
                    minusTop: tableWidth - ( cellSize + 2) ,
                });
            }
        }
    };
    deleteRow = () => {
        const { cellSize } = this.state;
        const tableRowLength = this.state.table.length;
        const tableHeight = tableRowLength * (cellSize + 2) + 3 - cellSize
        const indexRow = (this.state.minusLeft - 5) / (cellSize + 2) ;
        const { table } = this.state;
        const { keyRow } = this.state;
        let newKey;
        if( indexRow === (tableRowLength - 1) && tableRowLength > 1){
            newKey = table[indexRow -1][0].row
        }
        if( indexRow < (tableRowLength -1)){
            newKey = table[indexRow + 1][0].row
        }
        if(tableRowLength <= 2) {
            this.setState({
                minusLeftDisplay:  false,
            });
        }
        if(tableRowLength > 1) {
            let filetArrIndex = 0;
            let newTableRow = table.filter((arrIndex, index, arr) => {
                if(filetArrIndex <= table.length) {
                    filetArrIndex = 0
                }
                return arrIndex[filetArrIndex++].row !== keyRow
            })
            this.setState({
               table: newTableRow,
               keyRow: newKey,
            });
            if(this.state.minusLeft >= tableHeight){
                this.setState({
                    minusLeft: tableHeight - ( cellSize + 2) ,
                });
            }
        }
    };
    mouseOverTable = ({target}) => {
        clearTimeout(setTimeoutMouseleave)
        if(this.state.table.length > 1){
            this.setState({
                minusLeftDisplay:  true,
            });
        }
        if(this.state.table[0].length > 1){
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
        setTimeoutMouseleave = setTimeout(() => {
            this.setState({
                minusTopDisplay: false,
                minusLeftDisplay: false,
            });
        }, 3000);
    };
    render() {
        const { minusTopDisplay, minusLeftDisplay, cellSize, minusTop, minusLeft, table } = this.state;
        const minusTopDisplayClass = classNames({
            'button-minus button-minus_top': !minusTopDisplay,
            'button-minus button-minus_top button-minus_animation-display': minusTopDisplay,
        });
        const minusLeftDisplayClass = classNames({
            'button-minus button-minus_left': !minusLeftDisplay,
            'button-minus button-minus_left button-minus_animation-display': minusLeftDisplay,
        });
        const blockTable = cx({
            "block-table": true,
        });
        const wrapperTable = cx({
            "wrapper-table": true,
        });
        const buttonPlusRight = cx({
            "button-plus button-plus_right": true,
        });
        const buttonPlusBottom = cx({
            "button-plus button-plus_bottom": true,
        });
        return (
            <div className={blockTable}>

                <div className={wrapperTable} onMouseLeave={this.leaveTable} onMouseOver={this.mouseOverTable}>
                    <Button classButton={minusTopDisplayClass} cellSize={cellSize}
                            minusTop={minusTop} handleClick={this.deleteCells}>
                        <span>-</span>
                    </Button>
                    <Button classButton={minusLeftDisplayClass} cellSize={cellSize}
                            minusLeft={minusLeft} handleClick={this.deleteRow}>
                        <span>-</span>
                    </Button>
                    <TableBody cellSize={cellSize}>
                        {table}
                    </TableBody>
                </div>
                <Button classButton={buttonPlusRight} cellSize={cellSize}
                        handleClick={this.addCell}>
                    <span>+</span>
                </Button>
                <Button classButton={buttonPlusBottom} cellSize={cellSize}
                        handleClick={this.addRow}>
                    <span>+</span>
                </Button>
            </div>
        )
    }
}
