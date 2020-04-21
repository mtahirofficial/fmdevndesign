import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'



import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import LandingPage from './LandingPage';
import WebDevelopment from './WebDevelopment';
import Graphics from './Graphics';
import AppDevelopment from './AppDevelopment';
import Courses from './Courses';
import ApplicationForm from './ApplicationForm';
import AllreadyApplied from './Applied.jsx';
import WebCourse from './WebCourse.jsx';


// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/web-development" component={WebDevelopment} />
            <Route exact path="/mobile-app-development" component={AppDevelopment} />
            <Route exact path="/graphic-designing" component={Graphics} />
            <Route exact path="/apply" component={ApplicationForm} />
            <Route exact path="/applied" component={AllreadyApplied} />
            <Route exact path="/courses/web" component={WebCourse} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Router;