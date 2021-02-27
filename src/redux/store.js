import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reducer from './reducers'

const store = createStore(Reducer,applyMiddleware(thunk,logger))

export default store;