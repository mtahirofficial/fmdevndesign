import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { showCard } from '../Store/Actions/Actions.jsx'

class AllreadyApplied extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cnic: ""
        }
        this.showCard = this.showCard.bind(this)
    }
    CNICHandler = (e) => {
        this.setState({
            cnic: e.target.value
        })
    }
    showCard = e => {
        e.preventDefault()
        console.log(this.state.cnic)
        this.props.changeStateToReducer(this.state.cnic)

    }



    render() {
        return (
            <div>
                <div className="allreadyApplied">
                    <h1 className="idCard-Heading">Already Applied</h1>
                    <p className="mt-5">
                        Enter your CNIC number to download your form
                    </p>
                    <form>
                        <div className="container">
                            <div className="row pt-4">
                                <div className="col-sm-12 col-md-3 col-lg-3 mb-5">

                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                    <div className="ui-placeholder ui-leftTop ui-zoom">
                                        <input type="text" className="ui-underline" value={this.state.cnic} placeholder="CNIC" maxLength="13" onChange={this.CNICHandler} />
                                        <span>CNIC</span>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3 col-lg-3 mb-5">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-3 col-lg-3"></div>
                                <button className="col-sm-12 col-md-6 col-lg-6 mb-3 btn btn-info shadow btnShowCard" onClick={this.showCard}><FontAwesomeIcon icon={faIdCard} /> Show ID Card</button>
                                <div className="col-sm-12 col-md-3 col-lg-3"></div>
                            </div>
                            <div className="row">
                                {this.props.cnic}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(card) {
    return ({
        cnic: card.candidateReducer.cnic,
    })
}
function mapDispatchToProps(dispatch) {
    return ({
        changeStateToReducer: (cnic) => {
            dispatch(showCard(cnic))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AllreadyApplied);