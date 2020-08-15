
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from 'Reducers';

const loggingEnabledKey = 'redux.logging.enabled';

const middleware = [thunk];

const loggingEnabledPref = localStorage.getItem(loggingEnabledKey);
if (loggingEnabledPref === 'true') {
	middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	{},
	composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
