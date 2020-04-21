import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faImage, faMale, faFemale, faUniversity, faFileImage } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { saveCandidate } from '../Store/Actions/Actions.jsx'

class ApplicationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            cnic: "",
            mobile: "",
            email: "",
            dob: "",
            fatherName: "",
            fatherMobile: "",
            address: "",
            gender: {
                Male: false,
                Female: false
            },
            selectedGender: "",
            meritalStatus: {
                Married: false,
                Single: false
            },
            selectedStatus: "",
            Qualification: {
                Matric: false,
                Intermediate: false,
                UnderGraduate: false,
                Graduate: false,
                PostGraduate: false
            },
            selectedQualification: "",
            passYear: "",
            institute: "",
            file: '',
            imagePreviewUrl: '',
            currentCandidateRecord: []
        }
        this.firstNamehandler = this.firstNamehandler.bind(this);
        this.lastNamehandler = this.lastNamehandler.bind(this);
        this.CNICHandler = this.CNICHandler.bind(this);
        this.mobileHnadler = this.mobileHnadler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.DOBHandler = this.DOBHandler.bind(this);
        this.fatherNameHandler = this.fatherNameHandler.bind(this);
        this.fatherMobileHandler = this.fatherMobileHandler.bind(this);
        this.addresshandler = this.addresshandler.bind(this);
        this.genderHandler = this.genderHandler.bind(this);
        this.meritalStatusHandler = this.meritalStatusHandler.bind(this);
        this.degreeHandler = this.degreeHandler.bind(this);
        this.passYearhandler = this.passYearhandler.bind(this);
        this.instituteHandler = this.instituteHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);


        this.loadFile = this.loadFile.bind(this)
    }
    firstNamehandler = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    lastNamehandler = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    CNICHandler = (e) => {
        this.setState({
            cnic: e.target.value
        })
    }
    mobileHnadler = (e) => {
        this.setState({
            mobile: e.target.value
        })
    }
    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    DOBHandler = (e) => {
        this.setState({
            dob: e.target.value
        })
    }
    fatherNameHandler = (e) => {
        this.setState({
            fatherName: e.target.value
        })
    }
    fatherMobileHandler = (e) => {
        this.setState({
            fatherMobile: e.target.value
        })
    }
    addresshandler = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    genderHandler = (e) => {
        let newGender = this.state.gender;
        for (var key in newGender) {
            newGender[key] = false;
        }
        newGender[e.target.value] = e.target.checked;


        this.setState({
            gender: newGender,
            selectedGender: e.target.value
        })
    }
    meritalStatusHandler = (e) => {
        let _meritalStatus = this.state.meritalStatus;
        for (var key in _meritalStatus) {
            _meritalStatus[key] = false;
        }
        _meritalStatus[e.target.value] = e.target.checked;

        this.setState({
            meritalStatus: _meritalStatus,
            selectedStatus: e.target.value
        })
    }
    degreeHandler = (e) => {
        let Qualification = this.state.Qualification;
        for (var key in Qualification) {
            Qualification[key] = false;
        }
        Qualification[e.target.value] = e.target.checked;

        this.setState({
            Qualification: Qualification,
            selectedQualification: e.target.value
        })
    }
    passYearhandler = (e) => {
        this.setState({
            passYear: e.target.value
        })
    }
    instituteHandler = (e) => {
        this.setState({
            institute: e.target.value
        })
    }


    loadFile(event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    };

    submitHandler = e => {
        let currentCandidateRecord = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            cnic: this.state.cnic,
            mobile: this.state.mobile,
            email: this.state.email,
            dob: this.state.dob,
            fatherName: this.state.fatherName,
            fatherMobile: this.state.fatherMobile,
            address: this.state.address,
            gender: this.state.selectedGender,
            meritalStatus: this.state.selectedStatus,
            qualification: this.state.selectedQualification,
            passYear: this.state.passYear,
            institute: this.state.institute,
            file: this.state.file,
            imagePreviewUrl: this.state.imagePreviewUrl
        }

        let currentCandidateRecordList = this.state.currentCandidateRecord

        currentCandidateRecordList.push(currentCandidateRecord)

        this.setState({
            currentCandidateRecord: currentCandidateRecordList
        })
        e.preventDefault()
        // console.log(this.state.currentCandidateRecord) // pick up data from here
        this.props.changeStateToReducer(this.state.currentCandidateRecord)

        this.setState({
            firstName: "",
            lastName: "",
            cnic: "",
            mobile: "",
            email: "",
            dob: "",
            fatherName: "",
            fatherMobile: "",
            address: "",
            selectedGender: "",
            gender: {
                Male: false,
                Female: false
            },
            selectedStatus: "",
            meritalStatus: {
                Married: false,
                Single: false
            },
            Qualification: {
                Matric: false,
                Intermediate: false,
                UnderGraduate: false,
                Graduate: false,
                PostGraduate: false
            },
            selectedQualification: "",
            passYear: "",
            institute: "",
            file: '',
            imagePreviewUrl: "",
            currentCandidateRecord: []
        })

    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="uploadedImg" alt="Profile" />);
            console.log(imagePreviewUrl, "if")
        } else if (this.props.imagePreviewUrl) {
            $imagePreview = (<img src={this.props.imagePreviewUrl} className="uploadedImg" alt="Profile" />);
            console.log(this.props.imagePreviewUrl, "if else")
        }
        else {
            $imagePreview = (<img src="./images/male.jpg" className="uploadedImg" alt="Profile" />);
        }




        return (
            <div className="application">
                <div className="container pb-5">
                    <div className="application-form">
                        <h1 className="text-center mb-4 application-heading" >Application Form</h1>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <Link to="/applied" className="btn col-sm-12 col-md-12 col-lg-12 applied">Alredy Applied <FontAwesomeIcon icon={faQuestion} /></Link>
                                <form className="application">
                                    <div className="container">
                                        <h3 className="h3-form-headings mt-3"><FontAwesomeIcon icon={faMale} /> Personal Information</h3>
                                        {/* Personal Information */}
                                        <div className="row pt-4">
                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.firstName} placeholder="First Name" onChange={this.firstNamehandler} />
                                                    <span>First Name</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.lastName} placeholder="Last Name" onChange={this.lastNamehandler} />
                                                    <span>Last Name</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.cnic} placeholder="CNIC" maxLength="13" onChange={this.CNICHandler} />
                                                    <span>CNIC</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.mobile} placeholder="Mobile No." maxLength="11" onChange={this.mobileHnadler} />
                                                    <span>Mobile No.</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.email} placeholder="E-mail" onChange={this.emailHandler} />
                                                    <span>E-mail</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="date" className="ui-underline" value={this.state.dob} placeholder="DOB" onChange={this.DOBHandler} />
                                                    <span>DOB</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.fatherName} placeholder="Father Name" onChange={this.fatherNameHandler} />
                                                    <span>Father Name</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.fatherMobile} placeholder="Father Mobile No." maxLength="11" onChange={this.fatherMobileHandler} />
                                                    <span>Father Mobile No.</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-12 col-lg-12 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.address} placeholder="Address" onChange={this.addresshandler} />
                                                    <span>Address</span>
                                                </div>
                                            </div>

                                        </div>
                                        {/* Gender */}
                                        <div className="element">
                                            <h4>Gender</h4>
                                            <div className="row">
                                                <div className="el-child col-sm-6">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="male" name="gender" value="Male" checked={this.state.gender["Male"]} onChange={this.genderHandler} />
                                                        <span className="ui-custom">
                                                            <span className="ui-checked">
                                                                <FontAwesomeIcon icon={faMale} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <label>Male</label>
                                                </div>
                                                <div className="el-child col-sm-6">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="female" name="gender" value="Female" checked={this.state.gender["Female"]} onChange={this.genderHandler} />
                                                        <span className="ui-custom">
                                                            <span className="ui-checked">
                                                                <FontAwesomeIcon icon={faFemale} />

                                                            </span>
                                                        </span>
                                                    </div>
                                                    <label>Female</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Merital Status */}
                                        <div className="element">
                                            <h4>Merital Status</h4>
                                            <div className="row">
                                                <div className="el-child col-sm-6">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="married" name="meritalStatus" value="Married" checked={this.state.meritalStatus["Married"]} onChange={this.meritalStatusHandler} />
                                                        <span className="ui-custom">
                                                            <span className="ui-checked">
                                                                <FontAwesomeIcon icon={faMale} />
                                                                <FontAwesomeIcon icon={faFemale} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <label>Married</label>
                                                </div>
                                                <div className="el-child col-sm-6">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="single" name="meritalStatus" value="Single" checked={this.state.meritalStatus["Single"]} onChange={this.meritalStatusHandler} />
                                                        <span className="ui-custom">
                                                            <span className="ui-checked">
                                                                <FontAwesomeIcon icon={faMale} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <label>Single</label>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="h3-form-headings mt-3"><FontAwesomeIcon icon={faUniversity} /> Academic Information</h3>

                                        <div className="element">
                                            <h4 className="mt-5" >Select Highest Qualification:</h4>
                                            <div className="row">
                                                <div className="el-child col-sm-6 col-md-4 col-lg-4">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="Karim2" name="degree" value="Matric" checked={this.state.Qualification["Matric"]} onChange={this.degreeHandler} />
                                                        <span data-checked="&#10004;" />
                                                    </div>
                                                    <label>Matric</label>
                                                </div>
                                                <div className="el-child col-sm-6 col-md-4 col-lg-4">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="Ayaan2" name="degree" value="Intermediate" checked={this.state.Qualification["Intermediate"]} onChange={this.degreeHandler} />
                                                        <span data-checked="&#10004;" />
                                                    </div>
                                                    <label>Intermediate</label>
                                                </div>
                                                <div className="el-child col-sm-6 col-md-4 col-lg-4">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="Zoya2" name="degree" value="UnderGraduate" checked={this.state.Qualification["UnderGraduate"]} onChange={this.degreeHandler} />
                                                        <span data-checked="&#10004;" />
                                                    </div>
                                                    <label>Under Graduate</label>
                                                </div>
                                                <div className="el-child col-sm-6 col-md-4 col-lg-4">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="Seema2" name="degree" value="Graduate" checked={this.state.Qualification["Graduate"]} onChange={this.degreeHandler} />
                                                        <span data-checked="&#10004;" />
                                                    </div>
                                                    <label>Graduate</label>
                                                </div>
                                                <div className="el-child col-sm-6 col-md-4 col-lg-4">
                                                    <div className="ui-checkbox bg-default ui-medium ui-animation-zoom round">
                                                        <input type="radio" id="Seema2" name="degree" value="PostGraduate" checked={this.state.Qualification["PostGraduate"]} onChange={this.degreeHandler} />
                                                        <span data-checked="&#10004;" />
                                                    </div>
                                                    <label>Post Graduate</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.passYear} placeholder="Passout Year" maxLength="4" onChange={this.passYearhandler} />
                                                    <span>Passout Year</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-9 col-lg-9 mb-5">
                                                <div className="ui-placeholder ui-leftTop ui-zoom">
                                                    <input type="text" className="ui-underline" value={this.state.institute} placeholder="Institute Name" onChange={this.instituteHandler} />
                                                    <span>Institute Name</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <div className="row">
                                    <div className="col-sm-12 mb-3 shadow" style={{ width: '100%', height: 'auto', border: "1px solid #EBEBEB", backgroundColor: "#F1F1F1" }}>
                                        <div>
                                            <h3 className="mt-3 h3-uploadPhoto" >
                                                <FontAwesomeIcon icon={faFileImage} /> Upload Photo
                                            </h3>
                                        </div>
                                        <div className="text-center img">

                                            {$imagePreview}
                                        </div>
                                        <div className="">
                                            <label className="col-sm-12 mb-3 btn btn-info shadow btnApply"><FontAwesomeIcon icon={faImage} /> Select Photo<input type="file" accept="image/*" name="image" style={{ display: 'none' }} onChange={this.loadFile} /></label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mb-3 shadow" style={{ width: '100%', height: 'auto', border: "1px solid #EBEBEB", backgroundColor: "#F1F1F1" }}>
                                        <div>
                                            <h3 className="mt-3 h3-instructions" >
                                                Instructions
                                            </h3>
                                        </div>
                                        <p>- Upload recent passport size photo.<br />- With Blue or white background.<br />- All fields are required. </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn col-sm-12 col-md-12 col-lg-12 register" onClick={this.submitHandler} >Register</button>

                                </div>
                                <div className="mt-5 row">
                                    <div className="col-sm-5">
                                        <h6 className="keys" >First Name:</h6>
                                        <h6 className="keys" >Last Name:</h6>
                                        <h6 className="keys" >CNIC:</h6>
                                        <h6 className="keys" >Mobile:</h6>
                                        <h6 className="keys" >Email:</h6>
                                        <h6 className="keys" >DOB:</h6>
                                        <h6 className="keys" >Father Name:</h6>
                                        <h6 className="keys" >Father Mobile:</h6>
                                        <h6 className="keys" >Address:</h6>
                                        <h6 className="keys" >Gender:</h6>
                                        <h6 className="keys" >Merital Status:</h6>
                                        <h6 className="keys" >Qualification:</h6>
                                        <h6 className="keys" >Pass Year:</h6>
                                        <h6 className="keys" >Institute:</h6>
                                    </div>
                                    <div className="col-sm-1">
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                        <h6 className="colon">:</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h6 className="values"> {this.state.firstName} {this.props.firstName} </h6>
                                        <h6 className="values"> {this.state.lastName} {this.props.lastName} </h6>
                                        <h6 className="values"> {this.state.cnic} {this.props.cnic} </h6>
                                        <h6 className="values"> {this.state.mobile} {this.props.mobile} </h6>
                                        <h6 className="values"> {this.state.email} {this.props.email} </h6>
                                        <h6 className="values"> {this.state.dob} {this.props.dob} </h6>
                                        <h6 className="values"> {this.state.fatherName} {this.props.fatherName} </h6>
                                        <h6 className="values"> {this.state.fatherMobile} {this.props.fatherMobile} </h6>
                                        <h6 className="values"> {this.state.address} {this.props.address} </h6>
                                        <h6 className="values"> {this.state.selectedGender} {this.props.gender} </h6>
                                        <h6 className="values"> {this.state.selectedStatus} {this.props.meritalStatus} </h6>
                                        <h6 className="values"> {this.state.selectedQualification} {this.props.qualification} </h6>
                                        <h6 className="values"> {this.state.passYear} {this.props.passYear} </h6>
                                        <h6 className="values"> {this.state.institute} {this.props.institute} </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(student) {
    return ({
        firstName: student.candidateReducer.firstName,
        lastName: student.candidateReducer.lastName,
        cnic: student.candidateReducer.cnic,
        mobile: student.candidateReducer.mobile,
        email: student.candidateReducer.email,
        dob: student.candidateReducer.dob,
        fatherName: student.candidateReducer.fatherName,
        fatherMobile: student.candidateReducer.fatherMobile,
        address: student.candidateReducer.address,
        gender: student.candidateReducer.gender,
        meritalStatus: student.candidateReducer.meritalStatus,
        qualification: student.candidateReducer.qualification,
        passYear: student.candidateReducer.passYear,
        institute: student.candidateReducer.institute,
        file: student.candidateReducer.file,
        imagePreviewUrl: student.candidateReducer.imagePreviewUrl
    })
}
function mapDispatchToProps(dispatch) {
    return ({
        changeStateToReducer: (candidate) => {
            dispatch(saveCandidate(candidate))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);