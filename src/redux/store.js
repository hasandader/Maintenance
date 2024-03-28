import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import uiReducer from './reducers/ui';
import maintenanceAuth from './reducers/auth';
import maintenanceReducer from './reducers/maintenance';

const rootReducer = combineReducers({
    ui: uiReducer,
    maintenanceAuth: maintenanceAuth,
    maintenance: maintenanceReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
