import React from 'react';
import { storiesOf } from '@storybook/react';

import SignUpModule from './SignUpModule';

storiesOf('SignUpModule', module)
  .add('Basic SignUpModule Example', () => {

    return(
      <SignUpModule />
    );
  }
);
