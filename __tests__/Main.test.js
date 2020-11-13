/**
 * @format
 */

import 'react-native';
import React from 'react';
import configureMockStore from "redux-mock-store";

import renderer from 'react-test-renderer';
import Main from '../src/screen/Main'
const mockStore = configureMockStore();

it('renders MainComponent', () => {
    const product = [
        {
            productName: "Orange",
            status: "active"
        },
        {
            productName: "Apple",
            status: "active"
        }
    ]
    let component = renderer.create(<Main product={product} />);
    expect(component.toJSON()).toMatchSnapshot();
    renderer.create(<Main />);

});

