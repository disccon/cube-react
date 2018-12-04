import React from 'react';
import Table from "../Table/Table";
import Button from "../Button/Button";


let setTimeoutMouseleave;
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tableCell: null,
            initialWidth: 4,
            initialHeight: 4,
            cellSize: 50,
            minusTopDisplay: false,
            minusLeftDisplay: false,
            minusTop: 5,
            minusLeft:  5,
        };
    }
    componentWillMount(){
        this.setState({
            tableCell: this.initialTableCells(),
        });
    }
    initialTableCells = () => {
        let table = []
        for (let i = 0; i < this.state.initialHeight; i++) {
            let children = []
            for (let j = 0; j < this.state.initialWidth; j++) {
                children.push(Number(`${i+1}${j+1}`))
            }
            table.push(children)
        }
        return table;
    }
    addCell = () => {
        if(this.state.tableCell[0].length > 1) {
            this.setState({
                minusTopDisplay:  true,
            });
        }
        let addNewTableCell = [...this.state.tableCell];
        for (let i = 0; i < this.state.tableCell.length; i++) {
            addNewTableCell[i].push(this.state.tableCell[i][this.state.tableCell[i].length -1] +1)
        }
        this.setState({
            tableCell: addNewTableCell
        });
    };
    addRow = () => {
        if(this.state.tableCell.length > 1){
            this.setState({
                minusLeftDisplay: true,
            });
        }
        let addNewRow = [];
        for (let i = 0; i < this.state.tableCell[0].length; i++) {
            addNewRow.push(this.state.tableCell[this.state.tableCell.length -1][i] +10)
        }
        this.setState({
            tableCell: [ ...this.state.tableCell,
                         addNewRow ]
        });
    };
    deleteCells = () => {
        const { cellSize } = this.state;
        const indexCell = (this.state.minusTop - 5) / (cellSize + 2);
        const tableCellLength = this.state.tableCell[0].length;
        let tableWidth = tableCellLength * (cellSize + 2) + 3 - cellSize
        if(tableCellLength <= 2) {
            this.setState({
                minusTopDisplay: false,
            });
        }
        if(tableCellLength > 1) {
            let newTableCell = [];
            let deleteCell = [];
            for (let i = 0; i < this.state.tableCell.length; i++) {
                deleteCell = this.state.tableCell[i].filter((arrIndex, index, arr) => {
                    return index !== indexCell
                });
                newTableCell.push(deleteCell)
            }
            this.setState({
                tableCell: newTableCell
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
        const tableRowLength = this.state.tableCell.length;
        const tableHeight = tableRowLength * (cellSize + 2) + 3 - cellSize
        const indexRow = (this.state.minusLeft - 5) / (cellSize + 2) ;
        if(tableRowLength <= 2) {
            this.setState({
                minusLeftDisplay:  false,
            });
        }
        if(tableRowLength > 1) {
            let newTableRow = this.state.tableCell.filter((arrIndex, index, arr) => {
                return index !== indexRow
            });
            this.setState({
                tableCell: newTableRow
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
        if(this.state.tableCell.length > 1){
            this.setState({
                minusLeftDisplay:  true,
            });
        }
        if(this.state.tableCell[0].length > 1){
            this.setState({
                minusTopDisplay: true,
            });
        }
        if(target.tagName === "TD"){
            this.setState({
                minusTop: target.offsetLeft + 3,
                minusLeft: target.offsetTop + 3,
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
        const { minusTopDisplay, minusLeftDisplay, cellSize, minusTop, minusLeft, tableCell } = this.state;
        const sizeStyle = {
            width: cellSize + "px",
            height: cellSize + "px"
        };
        return (
            <div className="block-table">
                <div className="wrapper-table" onMouseLeave={this.leaveTable} onMouseOver={this.mouseOverTable}>
                    <Button classButton={`button-minus button-minus_top ${minusTopDisplay === true ? 'button-minus_animation-display' : ''}`}
                            minusTop={minusTop} handleClick={this.deleteCells}>
                        <span>-</span>
                    </Button>
                    <Button classButton={`button-minus button-minus_left ${minusLeftDisplay === true ? 'button-minus_animation-display' : ''}`}
                            minusLeft={minusLeft} handleClick={this.deleteRow}>
                        <span>-</span>
                    </Button>
                    <Button classButton="button-plus button-plus_right"
                            handleClick={this.addCell}>
                        <span>+</span>
                    </Button>
                    <Button classButton="button-plus button-plus_bottom"
                            handleClick={this.addRow}>
                        <span>+</span>
                    </Button>
                    <Table sizeStyle={sizeStyle}>
                        {tableCell}
                    </Table>
                </div>
            </div>
        )
    }
}
