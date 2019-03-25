import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { favoritesReducer } from './favoritesReducer';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [ thunkMiddleware, loggerMiddleware ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(loggerMiddleware);
}

const store = createStore(
  favoritesReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;