import React from 'react';
import { storiesOf } from '@storybook/react';

import UserLoginWidthConstraint from './UserLoginWidthConstraint';

storiesOf('UserLoginWidthConstraint', module)
  .add('Basic UserLoginWidthConstraint Example', () => {

    return(
      <UserLoginWidthConstraint>
        <div style={{ width: '100%', height: '250px', backgroundColor: 'blue' }}/>
      </UserLoginWidthConstraint>
    );
  }
);
