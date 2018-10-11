import { applyMiddleware, createStore } from 'redux';
import * as reduxDevTools from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
const devModule = reduxDevTools;

const middleware = [thunk];

let composedMiddleware;
const initialState = {};

if (process.env.NODE_ENV === 'production') {
    composedMiddleware = applyMiddleware(...middleware);
} else {
	composedMiddleware = devModule.composeWithDevTools(applyMiddleware(...middleware, logger));
}

const configureStore = () => {
    return createStore(rootReducer, initialState, composedMiddleware);
};

export default configureStore;
