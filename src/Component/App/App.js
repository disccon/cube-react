import React from 'react';
import Table from "../Table/Table";
import Button from "../Button/Button";


let setTimeoutMouseleave;
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tableCell: null,
            initialWidth: 6,
            initialHeight: 4,
            cellSize: 50,
            minusTopDisplay: false,
            minusLeftDisplay: false,
            minusTop: "5px",
            minusLeft: "5px",
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
        if( this.state.tableCell[0].length > 1) {
            this.setState({
                minusTopDisplay:  true,
            });
        }
        let addNewTableCell = [...this.state.tableCell];
        for (let i = 0; i < this.state.tableCell.length; i++) {
            addNewTableCell[i].push(this.state.tableCell[i][this.state.tableCell[i].length -1] +1)
        }
        this.setState({
            tableCell:  addNewTableCell
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
    deleteCells = ({target}) => {
        const indexCell = (this.state.minusTop - 5) / (this.state.cellSize +2);
        const parentTarget = target.parentElement.getBoundingClientRect().width
        const tableCellLength = this.state.tableCell[0].length;
        if( tableCellLength <= 2) {
            this.setState({
                minusTopDisplay: false,
            });
        }
        if( tableCellLength > 1) {
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
            if( parentTarget < target.getBoundingClientRect().left ){
                this.setState({
                    minusTop: parentTarget - 2 * (this.state.cellSize + 2) - 3,
                });
            }
        }
    };
    deleteRow = ({target}) => {
        const tableRowLength = this.state.tableCell.length;
        const indexRow = (this.state.minusLeft - 5) / (this.state.cellSize + 2) ;
        if( tableRowLength <= 2) {
            this.setState({
                minusLeftDisplay:  false,
            });
        }
        if( tableRowLength > 1) {
            let newTableRow = this.state.tableCell.filter((arrIndex, index, arr) => {
                return index !== indexRow
            });
            this.setState({
                tableCell: newTableRow
            });
            if(target.parentElement.getBoundingClientRect().height < target.getBoundingClientRect().top ){
                this.setState({
                    minusLeft: target.parentElement.getBoundingClientRect().height - 2 * (this.state.cellSize + 2) - 3,
                });
            }
        }
    };
    mouseOverTable = ({target}) => {
        clearTimeout(setTimeoutMouseleave)
        if (this.state.tableCell.length > 1){
            this.setState({
                minusLeftDisplay:  true,
            });
        }
        if(this.state.tableCell[0].length > 1){
            this.setState({
                minusTopDisplay: true,
            });
        }
        if( target.tagName === "TD"){
            this.setState({
                minusTop: target.offsetLeft + 2,
                minusLeft: target.offsetTop + 2,
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
