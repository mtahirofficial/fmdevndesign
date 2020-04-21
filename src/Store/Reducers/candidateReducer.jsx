import actiontypes from '../Constant/Constant.jsx'

const states = {
    firstName: "",
    lastName: "",
    cnic: "",
    mobile: "",
    email: "",
    dob: "",
    fatherName: "",
    fatherMobile: "",
    address: "",
    gender: "",
    meritalStatus: "",
    qualification: "",
    passYear: "",
    institute: "",
    file: '',
    imagePreviewUrl: '',
}

export default (state = states, action) => {
    switch (action.type) {
        case actiontypes.saveCandidate:
            return (
                {
                    firstName: action.payload[0].firstName,
                    lastName: action.payload[0].lastName,
                    cnic: action.payload[0].cnic,
                    mobile: action.payload[0].mobile,
                    email: action.payload[0].email,
                    dob: action.payload[0].dob,
                    fatherName: action.payload[0].fatherName,
                    fatherMobile: action.payload[0].fatherMobile,
                    address: action.payload[0].address,
                    gender: action.payload[0].gender,
                    meritalStatus: action.payload[0].meritalStatus,
                    qualification: action.payload[0].qualification,
                    passYear: action.payload[0].passYear,
                    institute: action.payload[0].institute,
                    file: action.payload[0].file,
                    imagePreviewUrl: action.payload[0].imagePreviewUrl
                }
                // ,
                // console.log(action.payload[0].qualification, "Action.payload[0].ualification")
            )
        case actiontypes.showCard:
            console.log(action.payload, "Reducer")
            return (
                {
                    cnic: action.payload
                }
                // ,
            )

        default:
            return state
    }
}