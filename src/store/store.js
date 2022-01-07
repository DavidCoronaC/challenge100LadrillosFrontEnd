import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import { formReducer } from '../reducers/formReducer';
import thunk from 'redux-thunk';


const middlewares = [
    thunk,
];
const reducers = combineReducers({
    formReducer: formReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(reducers, applyMiddleware(thunk))
export const store = createStore(
    reducers,
    // applyMiddleware(thunk),
    composeEnhancers(applyMiddleware(...middlewares))
);