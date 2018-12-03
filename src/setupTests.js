import React from "react";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from "enzyme";
import sinon from 'sinon';


//import { shallowToJson } from 'enzyme-to-json';
//import toJson from 'enzyme-to-json';
// "jest": {
//     "snapshotSerializers": [
//         "enzyme-to-json/serializer"
//     ]
// },

// import {createSerializer} from 'enzyme-to-json';
//
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


configure({ adapter: new Adapter() });



//global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;

