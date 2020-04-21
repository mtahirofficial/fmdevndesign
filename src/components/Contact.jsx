import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeState } from '../Store/Actions/Actions.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope, faPhone, faHome, faClock } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            message: "",
            currentMessage: []
        }

        this.firstNamehandler = this.firstNamehandler.bind(this);
        this.lastNamehandler = this.lastNamehandler.bind(this);
        this.subjectHandler = this.subjectHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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
    subjectHandler = (e) => {
        this.setState({
            subject: e.target.value
        })
    }
    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    messageHandler = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    submitHandler = (e) => {
        let currentMessageObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message
        }
        let currentMessageList = this.state.currentMessage
        currentMessageList.push(currentMessageObject)
        this.setState({
            currentMessage: currentMessageList
        })

        e.preventDefault()
        console.log(this.state.currentMessage) // pick up data from here
        this.props.changeStateToReducer(this.state.currentMessage)
        this.setState({
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            message: "",
            currentMessage: []
        })
    }


    render() {
        return (
            <div className="contact" id="contactus">
                <div className="container">
                    <h1 className="text-center pb-5">Let's get in touch!</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h2 className="text-center">Have a Question ?</h2>
                            <form className="needs-validation contact-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>First Name</label>
                                        <input type="First Name" className="form-control" value={this.state.firstName} placeholder="First Name" onChange={this.firstNamehandler} />
                                        <div className="valid-feedback">Correct</div>
                                        <div className="invalid-feedback">This field is</div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Last Name</label>
                                        <input type="Last Name" className="form-control" value={this.state.lastName} placeholder="Last Name" onChange={this.lastNamehandler} />
                                        <div className="valid-feedback">Correct</div>
                                        <div className="invalid-feedback">This field is</div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Subject</label>
                                        <input type="text" className="form-control" value={this.state.subject} placeholder="Subject" onChange={this.subjectHandler} />
                                        <div className="valid-feedback">Correct</div>
                                        <div className="invalid-feedback">This field is</div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>E-mail</label>
                                        <input type="email" className="form-control" value={this.state.email} placeholder="Email" onChange={this.emailHandler} />
                                        <div className="valid-feedback">Correct</div>
                                        <div className="invalid-feedback">This field is</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Your Message</label>
                                    <textarea type="text" className="form-control" value={this.state.message} placeholder="Type your message here...." onChange={this.messageHandler} ></textarea>
                                    <div className="valid-feedback">Correct</div>
                                    <div className="invalid-feedback">This field is</div>
                                </div>
                                <button className="btn btn-info btnSend" onClick={this.submitHandler} >Send <FontAwesomeIcon icon={faPaperPlane} /></button>

                            </form>
                            <div>
                                <h6><b>First Name:</b> <span className="values"> {this.props.firstName}</span> </h6>
                                <h6><b>Last Name:</b> <span className="values"> {this.props.lastName}</span> </h6>
                                <h6><b>Subject:</b> <span className="values"> {this.props.subject}</span> </h6>
                                <h6><b>Email:</b> <span className="values"> {this.props.email}</span> </h6>
                                <h6><b>Message:</b> <span className="values"> {this.props.message}</span> </h6>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2 className="text-center pb-5">Contact Us</h2>
                            <div className="row">
                                {/* <div className="col-sm-3"></div> */}
                                <div className="col-sm-4">
                                    <p className="text-right">
                                        <a href="tel:+923078185388">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </a>

                                    </p>
                                    <p className="text-right">
                                        <a href="https://api.whatsapp.com/send?phone=923078185388" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    </p>
                                    <p className="text-right">
                                        <a href="mailto:hmtahirs1@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>

                                    </p>
                                    <p className="text-right">
                                        <a href="https://g.page/r/CfUUZWbJrXf4EAE" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHome} /></a>
                                    </p>
                                    <p className="text-right">
                                        <FontAwesomeIcon icon={faClock} />
                                    </p>


                                </div>
                                <div className="col-sm-8">
                                    <p><a href="tel:+923078185388">+92 300 81 85 388</a></p>
                                    <p><a href="https://api.whatsapp.com/send?phone=923078185388" rel="noopener noreferrer" target="_blank">+92 300 81 85 388</a></p>
                                    <p><a href="mailto:hmtahirs1@gmail.com">hmtahirs1@gmail.com</a></p>
                                    <p><a href="https://g.page/r/CfUUZWbJrXf4EAE" target="_blank" rel="noopener noreferrer">Jhangroad Faisalabad Pakistan</a></p>
                                    <p>Monday to Friday<br />9am-5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13620.600142636124!2d73.0492395!3d31.4099921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf877adc9666514f5!2sfm%20dev%20n%20design!5e0!3m2!1sen!2s!4v1586677740918!5m2!1sen!2s"
                                    width="100%"
                                    height="500"
                                    frameBorder="0"
                                    title="Location"
                                    style={{
                                        border:"1px solid #EBEBEB", 
                                        backgroundColor:"white",
                                        padding: "10px"
                                    }}
                                    aria-hidden="false">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(contactState) {
    return ({
        firstName: contactState.contactReducer.firstName,
        lastName: contactState.contactReducer.lastName,
        subject: contactState.contactReducer.subject,
        email: contactState.contactReducer.email,
        message: contactState.contactReducer.message
    })
}
function mapDispatchToProps(dispatch) {
    return ({
        changeStateToReducer: (updatedMessage) => {
            dispatch(changeState(updatedMessage))
        }
    })
}




export default connect(mapStateToProps, mapDispatchToProps)(Contact);

