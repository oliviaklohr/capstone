import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginComponent from './LoginComponent';

storiesOf('LoginComponent', module)
  .add('Basic LoginComponent Example', () => {

    return(
      <LoginComponent />
    );
  }
);
