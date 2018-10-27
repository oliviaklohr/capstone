import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginModule from './LoginModule';

storiesOf('LoginModule', module)
  .add('Basic LoginModule Example', () => {
    return(
      <LoginModule />
    );
  }
);
