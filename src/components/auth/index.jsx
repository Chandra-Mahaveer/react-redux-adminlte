import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AuthLayout from '../layouts';
import PageNotFound from '../PageNotFound';
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import EmailVerification from './EmailVerification';

const AuthApp = (props) => {
    if (props.filter) {
        return (
            <AuthLayout>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/email-verification" component={EmailVerification} />
                    <Route path="/reset-password" component={ResetPassword} />
                    <Route component={PageNotFound} />
                </Switch>
            </AuthLayout>
        )
    } else {
        return '';
    }
}

export default AuthApp;