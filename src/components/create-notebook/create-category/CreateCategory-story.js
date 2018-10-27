import React from 'react';
import { storiesOf } from '@storybook/react';

import CreateCategory from './CreateCategory';

storiesOf('CreateCategory', module)
  .add('Basic CreateCategory Example', () => {

    return(
      <CreateCategory />
    );
  }
);
