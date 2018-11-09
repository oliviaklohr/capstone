import React from 'react';
import { storiesOf } from '@storybook/react';

import CreateNotebook from './CreateNotebook-container';

storiesOf('CreateNotebook', module)
  .add('Basic CreateNotebook Example', () => {

    return(
      <CreateNotebook />
    );
  }
);
