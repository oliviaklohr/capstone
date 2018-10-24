import React from 'react';
import { storiesOf } from '@storybook/react';

import CategoryDropdown from './CategoryDropdown';

storiesOf('CategoryDropdown', module)
  .add('Basic CategoryDropdown Example', () => {
    const onSelectChangeCallback = ({ selectedCategory }) => console.log(`You've selected ${selectedCategory} as your category`);

    return(
      <CategoryDropdown
        onSelectChange={onSelectChangeCallback}
        options={[
          'CS 4070',
          'CS 4405',
          'CS 4650',
          'CS 4750',
          'CS 4980',
        ]}
      />
    );
  }
);
