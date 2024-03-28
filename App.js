/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MaintenanceApp from './src/App';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MaintenanceApp />
    </Provider>
  );
};

export default App;