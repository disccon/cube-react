import React from 'react';
import App from '../App/App';
import Button from "./Button";
import TableBody from "../TableBody/TableBody";

it('Table get props', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('Button')).toHaveLength(4);
    expect(wrapper.find(Button).length).toBe(4);
    expect(wrapper.find('.button-minus')).toHaveLength(2);
    expect(wrapper.find('.button-minus').at(1).type()).toEqual('button');
});

it('Button .at(0) get props', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Button).at(0).get(0).props.minusTopDisplay).toEqual(false);
    expect(wrapper.find(Button).at(0).get(0).props.cellSize).toEqual(50);
    expect(wrapper.find(Button).at(0).get(0).props.minusTop).toEqual(5);
    expect(wrapper.find(Button).at(0).childAt(0).type()).toEqual('button');
    expect(wrapper.find(Button).at(0).childAt(0).is('.button-minus')).toEqual(true);
    expect(wrapper.find(Button).at(0).childAt(0).hasClass('button-minus button-minus_top')).toEqual(true);
    //expect(wrapper.find(Button).at(0).get(0).props.children).toEqual(<span>-</span>);
});

it('Button .at(1) get props', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Button).at(1).get(0).props.minusLeftDisplay).toEqual(false);
    expect(wrapper.find(Button).at(1).get(0).props.cellSize).toEqual(50);
    expect(wrapper.find(Button).at(1).get(0).props.minusLeft).toEqual(5);
    expect(wrapper.find(Button).at(1).childAt(0).is('.button-minus')).toEqual(true);
    expect(wrapper.find(Button).at(1).childAt(0).hasClass('button-minus button-minus_left')).toEqual(true);
    //expect(wrapper.find(Button).at(1).get(0).props.children).toEqual(<span>-</span>);
});

it('Button .at(2) get props', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Button).at(2).get(0).props.classButton).toEqual('button-plus button-plus_right');
    expect(wrapper.find(Button).at(2).get(0).props.cellSize).toEqual(50);
    expect(wrapper.find(Button).at(2).childAt(0).hasClass('button-plus button-plus_right')).toEqual(true);
   //expect(wrapper.find(Button).at(2).get(0).props.children).toEqual(<span>+</span>);
});
it('Button .at(3) get props', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Button).at(3).get(0).props.classButton).toEqual('button-plus button-plus_bottom');
    expect(wrapper.find(Button).at(3).get(0).props.cellSize).toEqual(50);
    expect(wrapper.find(Button).at(3).childAt(0).hasClass('button-plus button-plus_bottom')).toEqual(true);
   //expect(wrapper.find(Button).at(3).get(0).props.children).toEqual(<span>+</span>);
});


it('should render a App', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TableBody).get(0).props.children).toEqual([
        [{"cell": 1, "row": 1}, {"cell": 2, "row": 1}, {"cell": 3, "row": 1}, {"cell": 4, "row": 1}],
        [{"cell": 1, "row": 2}, {"cell": 2, "row": 2}, {"cell": 3, "row": 2}, {"cell": 4, "row": 2}],
        [{"cell": 1, "row": 3}, {"cell": 2, "row": 3}, {"cell": 3, "row": 3}, {"cell": 4, "row": 3}],
        [{"cell": 1, "row": 4}, {"cell": 2, "row": 4}, {"cell": 3, "row": 4}, {"cell": 4, "row": 4}],
    ]);
    wrapper.find('.button-plus_right').simulate('click');
    wrapper.find('.button-plus_right').simulate('click');
    expect(wrapper.find(TableBody).get(0).props.children).toEqual([
        [{"cell": 1, "row": 1}, {"cell": 2, "row": 1}, {"cell": 3, "row": 1}, {"cell": 4, "row": 1}, {"cell": 5, "row": 1}, {"cell": 6, "row": 1}],
        [{"cell": 1, "row": 2}, {"cell": 2, "row": 2}, {"cell": 3, "row": 2}, {"cell": 4, "row": 2}, {"cell": 5, "row": 2}, {"cell": 6, "row": 2}],
        [{"cell": 1, "row": 3}, {"cell": 2, "row": 3}, {"cell": 3, "row": 3}, {"cell": 4, "row": 3}, {"cell": 5, "row": 3}, {"cell": 6, "row": 3}],
        [{"cell": 1, "row": 4}, {"cell": 2, "row": 4}, {"cell": 3, "row": 4}, {"cell": 4, "row": 4}, {"cell": 5, "row": 4}, {"cell": 6, "row": 4}],
    ]);
    wrapper.find('.button-plus_bottom').simulate('click');
    wrapper.find('.button-plus_bottom').simulate('click');
    expect(wrapper.find(TableBody).get(0).props.children).toEqual([
        [{"cell": 1, "row": 1}, {"cell": 2, "row": 1}, {"cell": 3, "row": 1}, {"cell": 4, "row": 1}, {"cell": 5, "row": 1}, {"cell": 6, "row": 1}],
        [{"cell": 1, "row": 2}, {"cell": 2, "row": 2}, {"cell": 3, "row": 2}, {"cell": 4, "row": 2}, {"cell": 5, "row": 2}, {"cell": 6, "row": 2}],
        [{"cell": 1, "row": 3}, {"cell": 2, "row": 3}, {"cell": 3, "row": 3}, {"cell": 4, "row": 3}, {"cell": 5, "row": 3}, {"cell": 6, "row": 3}],
        [{"cell": 1, "row": 4}, {"cell": 2, "row": 4}, {"cell": 3, "row": 4}, {"cell": 4, "row": 4}, {"cell": 5, "row": 4}, {"cell": 6, "row": 4}],
        [{"cell": 1, "row": 5}, {"cell": 2, "row": 5}, {"cell": 3, "row": 5}, {"cell": 4, "row": 5}, {"cell": 5, "row": 5}, {"cell": 6, "row": 5}],
        [{"cell": 1, "row": 6}, {"cell": 2, "row": 6}, {"cell": 3, "row": 6}, {"cell": 4, "row": 6}, {"cell": 5, "row": 6}, {"cell": 6, "row": 6}],
    ]);
    expect(wrapper.find('.table').childAt(0).childAt(1).childAt(1).type()).toEqual('td');
    wrapper.find('.table').childAt(0).childAt(1).childAt(1).simulate('mouseover');
    expect(wrapper.find(Button).at(0).childAt(0).hasClass('button-minus button-minus_top button-minus_animation-display')).toEqual(true);
    expect(wrapper.find(Button).at(1).childAt(0).hasClass('button-minus button-minus_left button-minus_animation-display')).toEqual(true);
    wrapper.find('.button-minus_top').simulate('click');
    wrapper.find('.button-minus_top').simulate('click');
    wrapper.find('.button-minus_top').simulate('click');
    expect(wrapper.find(TableBody).get(0).props.children).toEqual([
        [{"cell": 1, "row": 1}, {"cell": 3, "row": 1}, {"cell": 4, "row": 1}, {"cell": 5, "row": 1}, {"cell": 6, "row": 1}],
        [{"cell": 1, "row": 2}, {"cell": 3, "row": 2}, {"cell": 4, "row": 2}, {"cell": 5, "row": 2}, {"cell": 6, "row": 2}],
        [{"cell": 1, "row": 3}, {"cell": 3, "row": 3}, {"cell": 4, "row": 3}, {"cell": 5, "row": 3}, {"cell": 6, "row": 3}],
        [{"cell": 1, "row": 4}, {"cell": 3, "row": 4}, {"cell": 4, "row": 4}, {"cell": 5, "row": 4}, {"cell": 6, "row": 4}],
        [{"cell": 1, "row": 5}, {"cell": 3, "row": 5}, {"cell": 4, "row": 5}, {"cell": 5, "row": 5}, {"cell": 6, "row": 5}],
        [{"cell": 1, "row": 6}, {"cell": 3, "row": 6}, {"cell": 4, "row": 6}, {"cell": 5, "row": 6}, {"cell": 6, "row": 6}]
    ]);
    expect(wrapper.find(Button).at(0).childAt(0).hasClass('button-minus button-minus_top')).toEqual(true);
    expect(wrapper.find(Button).at(1).childAt(0).hasClass('button-minus button-minus_left')).toEqual(true);
    wrapper.find('.table').childAt(0).childAt(2).childAt(2).simulate('mouseover');
    wrapper.find('.button-minus_left').simulate('click');
    wrapper.find('.button-minus_left').simulate('click');
    expect(wrapper.find(TableBody).get(0).props.children).toEqual([
        [{"cell": 1, "row": 1}, {"cell": 3, "row": 1}, {"cell": 4, "row": 1}, {"cell": 5, "row": 1}, {"cell": 6, "row": 1}],
        [{"cell": 1, "row": 2}, {"cell": 3, "row": 2}, {"cell": 4, "row": 2}, {"cell": 5, "row": 2}, {"cell": 6, "row": 2}],
        [{"cell": 1, "row": 4}, {"cell": 3, "row": 4}, {"cell": 4, "row": 4}, {"cell": 5, "row": 4}, {"cell": 6, "row": 4}],
        [{"cell": 1, "row": 5}, {"cell": 3, "row": 5}, {"cell": 4, "row": 5}, {"cell": 5, "row": 5}, {"cell": 6, "row": 5}],
        [{"cell": 1, "row": 6}, {"cell": 3, "row": 6}, {"cell": 4, "row": 6}, {"cell": 5, "row": 6}, {"cell": 6, "row": 6}]
    ]);
});