import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/script';

export default applyMiddleware(thunk)(createStore)(reducer);