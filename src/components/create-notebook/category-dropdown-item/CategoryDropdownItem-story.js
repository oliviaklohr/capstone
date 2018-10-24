import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';

import CategoryDropdownItem from './CategoryDropdownItem';

storiesOf('CategoryDropdownItem', module)
  .add('Basic CategoryDropdownItem Example', () => {

    const itemName = 'Class 1';

    return(
      <CategoryDropdownItem categoryName={itemName}/>
    );
  }
);
