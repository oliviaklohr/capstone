import React from 'react';
import { storiesOf } from '@storybook/react';

import UserLoginWidthControl from './UserLoginWidthControl';

storiesOf('UserLoginWidthControl', module)
  .add('Basic UserLoginWidthControl Example', () => {

    return(
      <UserLoginWidthControl>
        <div style={{ width: '100%', height: '250px', backgroundColor: 'blue' }}/>
      </UserLoginWidthControl>
    );
  }
);
