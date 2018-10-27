import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../../pages/login/Login-container';
import NotebooksPage from '../../pages/notebooks/Notebooks';
import SignUpPage from '../../pages/sign-up/SignUp-container';
import HomePage from '../../pages/home/Home';
import { HOME, LOGIN, NOTEBOOKS, SIGN_UP } from '../../utils/routes';

const App = () => {
  return(
    <Switch>
      <Route exact path={HOME} component={HomePage} />
      <Route path={LOGIN} component={LoginPage} />
      <Route path={NOTEBOOKS} component={NotebooksPage} />
      <Route path={SIGN_UP} component={SignUpPage} />
    </Switch>
  );
};

export default App;
