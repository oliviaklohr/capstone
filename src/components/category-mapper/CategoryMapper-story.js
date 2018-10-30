import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs';
import { mockNotebookObjects } from './_mockNotebookObjects';

import CategoryMapper from './CategoryMapper';

storiesOf('CategoryMapper', module)
  .add('Basic CategoryMapper example', () => {
    const title = text('title', 'Note 1');
    const dateCreated = text('dateCreated', '2018-10-30T01:01:25.475Z');
    const lastModified = text('lastModified', '2018-10-30T01:01:25.475Z');
    const CategoryMapperColor = color('CategoryMapperColor', '#808080');
    const isVisible = boolean('isVisible', false);

    return (
      <CategoryMapper notebooks={mockNotebookObjects} />  
    );
  });
