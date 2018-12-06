import React from 'react';
import App from '../App/App';
import Button from "../Button/Button";
import TableBody from "./TableBody";


it('Table get props', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TableBody).length).toBe(1)
    expect(wrapper.find(TableBody).get(0).props.children).toEqual([
            [{"cell": 1, "row": 1}, {"cell": 2, "row": 1}, {"cell": 3, "row": 1}, {"cell": 4, "row": 1}],
            [{"cell": 1, "row": 2}, {"cell": 2, "row": 2}, {"cell": 3, "row": 2}, {"cell": 4, "row": 2}],
            [{"cell": 1, "row": 3}, {"cell": 2, "row": 3}, {"cell": 3, "row": 3}, {"cell": 4, "row": 3}],
            [{"cell": 1, "row": 4}, {"cell": 2, "row": 4}, {"cell": 3, "row": 4}, {"cell": 4, "row": 4}],
        ]);
    expect(wrapper.find(TableBody).get(0).props.cellSize).toEqual(50);
    expect(wrapper.find(TableBody).length).toBe(1)
    expect(wrapper.find('.table').childAt(0).type()).toEqual('tbody');
    expect(wrapper.find('.table').childAt(0).childAt(0).key()).toEqual("1");
    expect(wrapper.find('.table').childAt(0).childAt(2).childAt(2).key()).toEqual("3")
});





// it('shallow render Table', () => {
//     const wrapper = shallow(<TableBody sizeStyle={{width:  "50px", height:  "50px"}} children={[[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]}/>);
//     expect(wrapper).toMatchSnapshot();
// });