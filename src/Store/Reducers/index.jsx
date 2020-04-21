import { combineReducers } from 'redux';
import contactReducer from './ContactReducer.jsx';
import candidateReducer from './candidateReducer.jsx'

export default combineReducers({
    contactReducer: contactReducer,
    candidateReducer: candidateReducer
})