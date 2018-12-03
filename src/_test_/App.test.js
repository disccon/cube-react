import React from 'react';
//import { expect } from 'chai';
import App from '../Component/App/App';
import Button from "../Component/Button/Button";
import Table from "../Component/Table/Table";


// test('should render a App', () => {
//     const component = renderer.create(
//         <App/>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });


it('should render a App', () => {
    const wrapper = mount(
        <App/>
    );
    expect(wrapper).toMatchSnapshot();
});

// it('should render a App', () => {
//     const wrapper = shallow(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find('.wrapper-table').length).toBe(1)
//     expect(wrapper.find(Button).length).toBe(4)
//     expect(wrapper.find(Table).length).toBe(1)
//     expect(wrapper.find('.button-minus')).toHaveLength(2);
// });

// it('should render a App', () => {
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
//     expect(wrapper.find(Table).get(0).props.children).toEqual([[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     expect(wrapper.find(Table).get(0).props.sizeStyle).toEqual({width: "50px", height: "50px"});
// });

// it('should render a App', () => {
//     const wrapper = shallow(<Table sizeStyle={{width:  "50px", height:  "50px"}} children={[[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]}/>);
//     //expect(wrapper.find('.block-table').childAt(0)).toEqual('.wrapper-table');
//     expect(wrapper).toMatchSnapshot();
// });

// it('should render a Button', () => {
//     const wrapper = shallow(
//         <Button classButton="button-minus button-minus_top " children={<span>-</span>} minusTop="0" minusLeft="0"/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });



///!
// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find('.button-plus button-plus_right').simulate('click'));
//     expect(wrapper.find('.button-plus button-plus_right').simulate('click'));
//     expect(wrapper.find('.button-plus button-plus_right').simulate('click'));
//     expect(wrapper.find('.button-plus button-plus_right').simulate('click'));
//     expect(wrapper).toMatchSnapshot();
// });
