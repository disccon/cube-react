import React from 'react';
import Table from "../Table/Table";
import Button from "../Button/Button";
import uuid from "uuid/v4";

let setTimeoutMouseleave;
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            TableCell: null,
            initialWidth: 6,
            initialHeight: 4,
            cellSize: 50,
            minusTopDisplay: false,
            minusLeftDisplay: false,
            minusTop: "5px",
            minusLeft: "5px",
        };
    }
        // this.minusTop = React.createRef();
        // this.minusLeft = React.createRef();
        // this.tableBody = React.createRef();
    // this.minusTop = React.createRef();
    // this.minusLeft = React.createRef();
    // this.tableBody = React.createRef();
    componentWillMount(){
        this.setState({
            TableCell: this.initialTableCells(),
        });
    }
    initialTableCells = () => {
        let table = []
        for (let i = 0; i < this.state.initialHeight; i++) {
            let children = []
            for (let j = 0; j < this.state.initialWidth; j++) {
                children.push([i+1,j+1])
            }
            table.push(children)
        }
        console.log(table)
        return table;
    }
    addCell = () => {
        if(1 < this.state.initialWidth) {
            this.setState({
                minusTopDisplay:  true,
            });
        }
        let addNewTableCell = [...this.state.TableCell];
        for (let i = 0; i < this.state.TableCell.length; i++) {
            addNewTableCell[i].push([i+1,this.state.TableCell[i].length + 1])
        }
        this.setState({
            TableCell:  addNewTableCell
        });
    };
    addRow = () => {
        if(1 < this.state.initialHeight) {
            this.setState({
                minusLeftDisplay: true,
            });
        }
        let addNewTableRow = [...this.state.TableCell];
        let addNewRow = [];
        for (let i = 0; i < this.state.TableCell[0].length; i++) {
            addNewRow.push([this.state.TableCell.length +1,i+1])
        }
        addNewTableRow.push(addNewRow)
        this.setState({
            TableCell:  addNewTableRow
        });
    };
    deleteCells = (event) => {
        //let minusTopPositionLeft = parseInt(target.left, 10);
        // if (minusTopPositionLeft + (this.state.cellSize + 2 ) > this.tableBody.current.getBoundingClientRect().width && 1 < this.state.initialWidth) {
        //     this.minusTop.current.style.left = minusTopPositionLeft - (this.state.cellSize + 2) + 'px';
        // }
        let target = event.target
        const indexSell = (this.state.minusTop - 5) / (this.state.cellSize +2);
        if( 1 < this.state.TableCell[0].length) {
            if( 2 === this.state.TableCell[0].length) {
                this.setState({
                    minusTopDisplay: false,
                });
            }
            let newTableCell = [];
            for (let i = 0; i < this.state.TableCell.length; i++) {
                let deleteCell = [
                    ...this.state.TableCell[i].slice(0,indexSell),
                    ...this.state.TableCell[i].slice(indexSell + 1),
                ]
                newTableCell.push(deleteCell)
            }
            this.setState({
                TableCell: newTableCell
            });
            if(target.parentElement.getBoundingClientRect().width < event.target.getBoundingClientRect().left ){
                this.setState({
                    minusTop: target.parentElement.getBoundingClientRect().width - 2 * (this.state.cellSize + 2) - 3,
                });
            }
        }
        // if(1 < this.state.TableCell.length) {
        //     console.log(this.state.TableCell);
        //     if(2 === this.state.TableCell.length) {
        //         this.setState({
        //             minusTopDisplay: false,
        //         });
        //     }
        //     this.setState(prevState => ({
        //         initialWidth: prevState.initialWidth - 1
        //     }));
        //     let add = this.state.TableCell;
        //     delete add[0];
        //     this.setState({
        //         TableCell: add,
        //     });
        //
        // }
    };
    deleteRow = (event) => {
        // let minusLeftPositionTop = parseInt( this.minusLeft.current.style.top, 10);
        // if (minusLeftPositionTop + (this.state.cellSize + 2 ) > this.tableBody.current.getBoundingClientRect().height && 1 < this.state.initialHeight) {
        //     this.minusLeft.current.style.top = minusLeftPositionTop - (this.state.cellSize + 2) + 'px';
        // }
        let target = event.target
        if(1 < this.state.TableCell.length) {
            if(2 === this.state.TableCell.length) {
                this.setState({
                    minusLeftDisplay:  false,
                });
            }
            const indexRow = (this.state.minusLeft - 5) / (this.state.cellSize + 2);
            let newTableRow = [
                ...this.state.TableCell.slice(0, indexRow),
                ...this.state.TableCell.slice(indexRow + 1),
            ]
            this.setState({
                TableCell: newTableRow
            });

            if(target.parentElement.getBoundingClientRect().height < event.target.getBoundingClientRect().top ){
                this.setState({
                    minusLeft: target.parentElement.getBoundingClientRect().height - 2 * (this.state.cellSize + 2) - 3,
                });
            }
        }
    };
    mouseOverTable = ({target}) => {
        //console.log('11',pageX,pageY,clientX,clientY)
        //console.log(this.tableBody.current.getBoundingClientRect())
        // let target = event.target
        clearTimeout(setTimeoutMouseleave)
        // console.log('dasdasd')
        if (1 < this.state.TableCell.length){
            this.setState({
                minusLeftDisplay:  true,
            });
        }
        if(1 < this.state.TableCell[0].length){
            this.setState({
                minusTopDisplay: true,
            });
        }
        if( target.tagName === "TD"){
            this.setState({
                //minusTop: (target.cellIndex * (this.state.cellSize + 2 )) + 5 + "px",
                //minusLeft: (target.parentElement.rowIndex * (this.state.cellSize + 2) ) + 5 + "px",
                // minusTop: parseInt( target.getBoundingClientRect().left - target.parentElement.parentElement.getBoundingClientRect().left,10) +5,
                // minusLeft: parseInt( target.getBoundingClientRect().top - target.parentElement.parentElement.getBoundingClientRect().top,10) +5,
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
        let sizeStyle = {
            width: this.state.cellSize + "px",
            height: this.state.cellSize + "px"
        };
        // console.log(this.state.TableCell)
        let minusTop = {
            left: this.state.minusTop +"px",
        };
        //handleMouseMove
        let minusLeft = {
            top: this.state.minusLeft +"px",
        };
        let { minusTopDisplay,minusLeftDisplay } = this.state;
        return (
            <div className="block-table">
                <div className="wrapper-table" onMouseLeave={this.leaveTable} onMouseOver={this.mouseOverTable}>
                    <Button classButton={`button-minus button-minus_top ${minusTopDisplay === true ? 'button-minus_animation-display' : null}`} position={minusTop}
                            handleClick={this.deleteCells}>
                        <span>-</span>
                    </Button>
                    <Button classButton={`button-minus button-minus_left ${minusLeftDisplay === true ? 'button-minus_animation-display' : null}`} position={minusLeft}
                            handleClick={this.deleteRow}>
                        <span>-</span>
                    </Button>
                    <Button classButton="button-plus button-plus_right"
                            handleClick={this.addCell}>
                            +
                    </Button>
                    <Button classButton="button-plus button-plus_bottom"
                            handleClick={this.addRow}>
                            +
                    </Button>
                    <Table styleSize={sizeStyle}>
                        {this.state.TableCell}
                    </Table>
                </div>
            </div>
        )
    }
}
