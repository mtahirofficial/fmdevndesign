import actiontypes from '../Constant/Constant.jsx'


const states = {
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
}


export default (state = states, action) => {
    switch (action.type) {
        case actiontypes.saveMessage:
            return ({
                firstName: action.payload[0].firstName,
                lastName: action.payload[0].lastName,
                subject: action.payload[0].subject,
                email: action.payload[0].email,
                message: action.payload[0].message,
            }
            // ,console.log(action.payload[0].firstName, "Action.payload")
            )
        default:
            return state
    }
}