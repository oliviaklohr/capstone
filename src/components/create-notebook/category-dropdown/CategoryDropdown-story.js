import React from 'react';
import { storiesOf } from '@storybook/react';

import CategoryDropdown from './CategoryDropdown';

storiesOf('CategoryDropdown', module)
  .add('Basic CategoryDropdown Example', () => {

    return(
      <CategoryDropdown />
    );
  }
);
