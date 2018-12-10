import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginPage from './login/Login';
import SignUpPage from './sign-up/SignUp';
import NotebooksPage from './notebooks/Notebooks';

storiesOf('Pages', module)
  .add('Login', () => ( <LoginPage /> ))
  .add('SignUp', () => ( <SignUpPage /> ))
  .add('Notebooks', () => ( <NotebooksPage /> ));
