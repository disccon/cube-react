import React from 'react';
import TableCell from "../TableCell";

let setTimeoutMouseleave;
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            initialWidth: 4,
            initialHeight: 4,
            cellSize: 50,
        };
        this.minusTop = React.createRef();
        this.minusLeft = React.createRef();
        this.plusBottom = React.createRef();
        this.plusRight = React.createRef();
        this.tableBody = React.createRef();
    }
    addRow = () => {
        if(1 === this.state.initialHeight) {
            this.minusTop.current.classList.add('button-minus_animation-display');
        }
        this.setState(prevState => ({
            initialHeight: prevState.initialHeight + 1
        }));
    }
    addCell = () => {
        if(1 === this.state.initialWidth) {
            this.minusLeft.current.classList.add('button-minus_animation-display');
        }
        this.setState(prevState => ({
            initialWidth: prevState.initialWidth + 1
        }));
    };
    deleteRow = () => {
        if(1 < this.state.initialWidth) {
            if(2 === this.state.initialWidth) {
                this.minusLeft.current.classList.remove('button-minus_animation-display');
            }
            this.setState(prevState => ({
                initialWidth: prevState.initialWidth - 1
            }));
            console.log(this.state.initialWidth)
        }
    }
    deleteCells = () => {
        if(1 < this.state.initialHeight) {
            if(2 === this.state.initialHeight) {
                this.minusTop.current.classList.remove('button-minus_animation-display');
            }
            this.setState(prevState => ({
                initialHeight: prevState.initialHeight - 1
            }));
        }
    }
    mouseOverTable = (event) => {
        let target = event.target
        clearTimeout(setTimeoutMouseleave)
        if (1 < this.state.initialWidth){
                this.minusLeft.current.classList.add('button-minus_animation-display');
        }
        if(1 < this.state.initialHeight){
                this.minusTop.current.classList.add('button-minus_animation-display');
        }
        if( target.tagName === "TD"){
            this.minusLeft.current.style.top = (target.parentElement.rowIndex * (this.state.cellSize +2) ) + 5 + "px";
            this.minusTop.current.style.left = (target.cellIndex * (this.state.cellSize + 2)) + 5+ "px";
        }
    }
    leaveTable = (event) => {
        setTimeoutMouseleave = setTimeout(() => {
            this.minusLeft.current.classList.remove('button-minus_animation-display');
            this.minusTop.current.classList.remove('button-minus_animation-display');
        }, 3000);
    }
    render() {
        return (
            <div className="block-table">
                <div className="wrapper-table" onMouseLeave={this.leaveTable} onMouseOver={this.mouseOverTable}>
                    <button type="button" className="button-minus button-minus_top" ref={this.minusTop} onClick={this.deleteCells}><span>-</span></button>
                    <button type="button" className="button-minus button-minus_left" ref={this.minusLeft} onClick={this.deleteRow}><span>-</span></button>
                    <button type="button" className="button-plus button-plus_right" ref={this.plusRight} onClick={this.addCell}>+</button>
                    <button type="button" className="button-plus button-plus_bottom" ref={this.plusBottom} onClick={this.addRow}>+</button>
                    <table className="table">
                        <TableCell widthRows={this.state.initialWidth} heightRows={this.state.initialHeight} sizeCell={this.state.cellSize}/>
                    </table>
                </div>
            </div>
        )
    }
}
