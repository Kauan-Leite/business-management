import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'


import enterpriseReducer from './reducers/enterpriseReducer';

const store = createStore(enterpriseReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;