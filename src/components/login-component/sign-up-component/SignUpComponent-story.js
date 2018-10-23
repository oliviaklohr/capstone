import React from 'react';
import { storiesOf } from '@storybook/react';

import SignUpComponent from './SignUpComponent';

storiesOf('SignUpComponent', module)
  .add('Basic SignUpComponent Example', () => {

    return(
      <SignUpComponent />
    );
  }
);
