import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './navigation/Navigation';
import store from './store/index';

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
