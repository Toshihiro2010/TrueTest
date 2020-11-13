/**
 * @format
 */

import 'react-native';
import React from 'react';
import Main from '../src/container/Main';
import configureMockStore from "redux-mock-store";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';


const mockStore = configureMockStore();

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      productReducer: {
        product: []
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {

  });
});