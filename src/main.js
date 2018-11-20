

//
// window.onload = function () {
//
//     const tableRefRows = tableRef.rows;
//     const plusBottom = document.getElementsByClassName('button-plus_bottom')[0];
//     const plusRight = document.getElementsByClassName('button-plus_right')[0];
//     const minusLeft = document.getElementsByClassName('button-minus_left')[0];
//     const minusTop = document.getElementsByClassName('button-minus_top')[0];
//     let TableMouseleave;
//     const wrapperTable = document.getElementsByClassName('wrapper-table')[0];
//
//     let targetIndexRow = null;
//     let targetIndexCell = null;
//
//     const tableRef = document.getElementsByClassName('table')[0];
//     let colCount = 4
//     for (let i = 0; i < colCount; i++) {
//         tableRef.insertRow(i)
//         for (let i2 = 0; i2 < colCount; i2++) {
//             tableRef.rows[i].insertCell(i2).innerHTML = i + ''+ i2;
//         }
//     }
//
//     let heightCell = tableRefRows[0].cells[0].getBoundingClientRect().height + 2;
//     let widthCell = tableRefRows[0].cells[0].getBoundingClientRect().width + 2;
//
//     // class Table {
    //     addRow() {
    //         let row = tableRef.insertRow(-1);
    //         for (let value of tableRefRows[0].cells) {
    //             row.insertCell();
    //         };
    //     };
    //     addCell() {
    //         for (let indexCell of tableRefRows) {
    //             indexCell.insertCell();
    //         }
    //     };
    //     deleteRow() {
    //         let minusLeftPositionTop = parseInt(minusLeft.style.top, 10);
    //         if ((minusLeftPositionTop + heightCell) > tableRef.getBoundingClientRect().height && tableRefRows.length > 2) {
    //             minusLeft.style.top = minusLeftPositionTop - heightCell + 'px';
    //         }
    //         if (tableRefRows.length > 1) {
    //             tableRef.deleteRow(targetIndexRow >= tableRefRows.length ? targetIndexRow = targetIndexRow - 1 : targetIndexRow)
    //         }
    //         if (tableRefRows.length === 1) {
    //             minusLeft.classList.remove('button-minus_animation-display');
    //         }
    //     };
    //     deleteCells() {
    //         let minusTopPositionLeft = parseInt(minusTop.style.left, 10);
    //         if ((minusTopPositionLeft + widthCell) > tableRef.getBoundingClientRect().width && tableRefRows[0].cells.length > 2) {
    //             minusTop.style.left = minusTopPositionLeft - widthCell + 'px';
    //         }
    //         if (tableRefRows[0].cells.length > 1) {
    //             if (targetIndexCell >= tableRefRows[0].cells.length) {
    //                 targetIndexCell = targetIndexCell - 1;
    //             }
    //             for (let index of tableRefRows) {
    //                 index.deleteCell(targetIndexCell)
    //             };
    //         }
    //         if (tableRefRows[0].cells.length === 1) {
    //             minusTop.classList.remove('button-minus_animation-display');
    //         }
    //     };
    //     mouseoverTable(event) {
    //         let target = event.target;
    //         clearTimeout(TableMouseleave)
    //         if (target.tagName === "TD" || target.tagName === "BUTTON") {
    //             if( target.tagName === "TD"){
    //                 targetIndexRow = target.parentElement.rowIndex;
    //                 targetIndexCell = target.cellIndex;
    //                 minusLeft.style.top = (target.parentNode.rowIndex * heightCell) + 5 + "px";
    //                 minusTop.style.left = (target.cellIndex * widthCell) + 5 + "px";
    //             }
    //             if (tableRefRows[0].cells.length > 1) {
    //                 minusTop.classList.add('button-minus_animation-display');
    //             }
    //             if (tableRefRows.length > 1) {
    //                 minusLeft.classList.add('button-minus_animation-display');
    //             }
    //         }
    //     };
    //     mouseleaveTable() {
    //         TableMouseleave = setTimeoutMouseleave(() => {
    //             minusLeft.classList.remove('button-minus_animation-display');
    //             minusTop.classList.remove('button-minus_animation-display');
    //         }, 3000);
    //     };
    // }
    //
    // let tableClass = new Table();
    //
    // plusBottom.addEventListener("click", tableClass.addRow);
    //
    // plusRight.addEventListener("click", tableClass.addCell);
    //
    // minusLeft.addEventListener("click", tableClass.deleteRow);
    //
    // minusTop.addEventListener("click", tableClass.deleteCells);
    //
    // wrapperTable.addEventListener("mouseover", tableClass.mouseoverTable);
    //
    // wrapperTable.addEventListener("mouseleave", tableClass.mouseleaveTable);

// }



