import actiontypes from '../Constant/Constant.jsx'



export function changeState(updatedMessage){
    return dispatch => {
        dispatch({
            type: actiontypes.saveMessage,
            payload: updatedMessage
        })
    }
}



export function saveCandidate(candidate){
    return dispatch => {
        dispatch({
            type: actiontypes.saveCandidate,
            payload: candidate
        })
    }
}
export function showCard(cnic){
    return dispatch => {
        dispatch({
            type: actiontypes.showCard,
            payload: cnic
        })
    }
}