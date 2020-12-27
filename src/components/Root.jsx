import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch, useLocation, withRouter } from 'react-router-dom';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import AuthApp from './auth';
import UserApp from './user';

const App = (props) => {
  const location = useLocation();
  const { pathname } = location;
  let { auth, user } = [false, false];
  let urlArr = pathname.split('/');
  user = urlArr[1] == 'user' ? true : false;
  auth = urlArr[1] != 'user' ? true : false;

  return (
    <>
      <ToastProvider>
        <AuthApp filter={auth} />
        <UserApp filter={user} />
      </ToastProvider>
    </>
  )
}

export default App;