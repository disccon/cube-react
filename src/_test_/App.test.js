import React from 'react';
//import { expect } from 'chai';
import App from '../Component/App/App';
import Button from "../Component/Button/Button";
import Table from "../Component/Table/Table";

// test('should render App Jest ', () => {
//     const component = renderer.create(
//         <App/>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });


// it('should render App Mount', () => {
//     const wrapper = mount(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

// it('should render  App Shallow', () => {
//     const wrapper = shallow(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });


// it('State App', () => {
//     const wrapper = mount(<App/>);
//     //expect(wrapper.find('.block-table').childAt(0)).toEqual('.wrapper-table');
//     expect(wrapper.state().tableCell).toEqual( [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     expect(wrapper.state().initialWidth).toEqual(4);
//     expect(wrapper.state().initialHeight).toEqual(4);
//     expect(wrapper.state().cellSize).toEqual(50);
//     expect(wrapper.state().minusTopDisplay).toEqual(false);
//     expect(wrapper.state().minusLeftDisplay).toEqual(false);
//     expect(wrapper.state().minusTop).toEqual(5);
//     expect(wrapper.state().minusLeft).toEqual(5);
// });

// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find('.wrapper-table').length).toBe(1)
//     expect(wrapper.find( 'Button')).toHaveLength(4);
//     expect(wrapper.find(Button).length).toBe(4)
//     expect(wrapper.find(Table).length).toBe(1)
//     expect(wrapper.find('.button-minus')).toHaveLength(2);
//     expect(wrapper.find('.button-minus').at(1).type()).toEqual('button')
//     expect(wrapper.find('.table').childAt(0).type()).toEqual('tbody');
//     expect(wrapper.find('.table').childAt(0).childAt(0).key()).toEqual("11");
//     expect(wrapper.find('.table').childAt(0).childAt(2).childAt(2).key()).toEqual("33")
// });



// it('Table get props', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find(Table).get(0).props.children).toEqual([[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     expect(wrapper.find(Table).get(0).props.sizeStyle).toEqual({width: "50px", height: "50px"});
// });


// it('shallow render Table', () => {
//     const wrapper = shallow(<Table sizeStyle={{width:  "50px", height:  "50px"}} children={[[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]}/>);
//     expect(wrapper).toMatchSnapshot();
// });


// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find(Table).get(0).props.children).toEqual([[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     wrapper.find('.button-plus_right').simulate('click');
//     wrapper.find('.button-plus_right').simulate('click');
//     //expect(wrapper).toMatchSnapshot();
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[11, 12, 13, 14, 15, 16], [21, 22, 23, 24, 25, 26], [31, 32, 33, 34, 35, 36], [41, 42, 43, 44, 45, 46]]);
//     wrapper.find('.button-plus_bottom').simulate('click');
//     wrapper.find('.button-plus_bottom').simulate('click');
//     //expect(wrapper).toMatchSnapshot();
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[11, 12, 13, 14, 15, 16], [21, 22, 23, 24, 25, 26], [31, 32, 33, 34, 35, 36], [41, 42, 43, 44, 45, 46],[51, 52, 53, 54, 55, 56],[61, 62, 63, 64, 65, 66]]);
//     wrapper.find('.button-minus_top').simulate('click');
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[12, 13, 14, 15, 16], [ 22, 23, 24, 25, 26], [32, 33, 34, 35, 36 ], [42, 43, 44, 45, 46],[52, 53, 54, 55, 56],[62, 63, 64, 65, 66]]);
//     wrapper.find('.button-minus_left').simulate('click');
//     wrapper.find('.button-minus_left').simulate('click');
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[32, 33, 34, 35, 36 ], [42, 43, 44, 45, 46],[52, 53, 54, 55, 56],[62, 63, 64, 65, 66]]);
// });


// it('Not work', () => {
//     expect(wrapper.find('.table').childAt(0).childAt(1).childAt(1).type()).toEqual('td');
//     expect(wrapper.state().minusTop).toEqual(5);
//     expect(wrapper.state().minusLeft).toEqual(5);
//     wrapper.find('.table').childAt(0).childAt(1).childAt(1).simulate('mouseover');
//     expect(wrapper.state().minusTop).toEqual(5); //toEqual() = 3  // minusTop: target.offsetLeft + 3, target.offsetLeft - not work
//     expect(wrapper.state().minusLeft).toEqual(5); //3  // minusLeft: target.offsetTop + 3, target.offsetTop - not work
// });