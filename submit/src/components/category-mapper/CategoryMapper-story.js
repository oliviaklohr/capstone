import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockNotebookObjects } from './_mockNotebookObjects';

import CategoryMapper from './CategoryMapper';

storiesOf('CategoryMapper', module)
  .add('Basic CategoryMapper example', () => {

    return (
      <CategoryMapper notebooks={mockNotebookObjects} />  
    );
  });
