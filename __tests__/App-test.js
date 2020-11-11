/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import configureMockStore from "redux-mock-store";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Main from '../src/screen/Main';
import { Provider } from 'react-redux';


const mockStore = configureMockStore();

// it('renders MainComponent', () => {
//   // let component = renderer.create(<Main />);

//   // expect(component.toJSON()).toMatchSnapshot();
//   renderer.create(<Main />);

// });

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
        <App />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {

  });
});