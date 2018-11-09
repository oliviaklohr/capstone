import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { store } from '../../state/appStore';
import LoginPage from '../../pages/login/Login-container';
import NotebooksPage from '../../pages/notebooks/Notebooks-container';
import SignUpPage from '../../pages/sign-up/SignUp-container';
import HomePage from '../../pages/home/Home';
import { HOME, LOGIN, NOTEBOOKS, SIGN_UP } from '../../utils/routes';

const App = () => {
  const state = store.getState();
  const isLoggedIn = !!(state.user.userId);
  return(
    <Switch>
      <Route exact path={HOME} component={HomePage} />
      <Route path={LOGIN} component={LoginPage} />
      { isLoggedIn && <Route path={NOTEBOOKS} component={NotebooksPage} />}
      <Route path={SIGN_UP} component={SignUpPage} />
      <Redirect to={HOME} />
    </Switch>
  );
};

export default App;
