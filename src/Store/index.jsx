import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './Reducers/index.jsx'


const store = createStore(
    combineReducers,
    {},
    applyMiddleware(thunk)
)

export default store