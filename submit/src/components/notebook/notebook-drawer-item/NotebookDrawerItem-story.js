import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color} from '@storybook/addon-knobs';

import NotebookDrawerItem from './NotebookDrawerItem';

storiesOf('NotebookDrawerItem', module)
  .add('Basic NotebookDrawerItem example', () => {
    const title = text('title', 'Note 1');
    const notebookColor = color('notebookColor', '#D500F9');
    const category = text('category', 'Class 1');

    return (
      <NotebookDrawerItem
        title={title}
        category={category}
        notebookColor={notebookColor}
        onClick={() => window.alert("You've clicked the notebook!")}
      />
    );
  });
