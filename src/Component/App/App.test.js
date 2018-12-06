import React from 'react';
import App from './App';
import Button from "../Button/Button";
import TableBody from "../TableBody/TableBody";

it('State App', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.state().table).toEqual( [
        [{"cell": 1, "row": 1}, {"cell": 2, "row": 1}, {"cell": 3, "row": 1}, {"cell": 4, "row": 1}],
        [{"cell": 1, "row": 2}, {"cell": 2, "row": 2}, {"cell": 3, "row": 2}, {"cell": 4, "row": 2}],
        [{"cell": 1, "row": 3}, {"cell": 2, "row": 3}, {"cell": 3, "row": 3}, {"cell": 4, "row": 3}],
        [{"cell": 1, "row": 4}, {"cell": 2, "row": 4}, {"cell": 3, "row": 4}, {"cell": 4, "row": 4}],
        ]
    );
    expect(wrapper.state().initialWidth).toEqual(4);
    expect(wrapper.state().initialHeight).toEqual(4);
    expect(wrapper.state().cellSize).toEqual(50);
    expect(wrapper.state().minusTopDisplay).toEqual(false);
    expect(wrapper.state().minusLeftDisplay).toEqual(false);
    expect(wrapper.state().minusTop).toEqual(5);
    expect(wrapper.state().minusLeft).toEqual(5);
    expect(wrapper.state().keyRow).toEqual(null);
    expect(wrapper.state().keyCell).toEqual(null);
});




// it('Not work', () => {
//     expect(wrapper.find('.table').childAt(0).childAt(1).childAt(1).type()).toEqual('td');
//     expect(wrapper.state().minusTop).toEqual(5);
//     expect(wrapper.state().minusLeft).toEqual(5);
//     wrapper.find('.table').childAt(0).childAt(1).childAt(1).simulate('mouseover');
//     expect(wrapper.state().minusTop).toEqual(5); //toEqual() = 3  // minusTop: target.offsetLeft + 3, target.offsetLeft - not work
//     expect(wrapper.state().minusLeft).toEqual(5); //3  // minusLeft: target.offsetTop + 3, target.offsetTop - not work
// });



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