import React from 'react';
import { storiesOf } from '@storybook/react';

import UserOptions from './UserOptions';

storiesOf('UserOptions', module)
  .add('Basic UserOptions Example', () => (
      <UserOptions
        onDeleteClick={() => window.alert('Delete Clicked!')}
        onLogOutClick={() => window.alert('Log Out Clicked!')}
      />
    )
  );
