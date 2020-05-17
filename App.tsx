import React from 'react';
import Navigation from './navigations/AppNavigation' 
import store from './store/Store'
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
        <Navigation />
    </Provider>
  );
}

