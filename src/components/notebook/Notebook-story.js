import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs';

import Notebook from './Notebook';

storiesOf('Notebook', module)
  .add('Basic Notebook example', () => {
    const title = text('title', 'Note 1');
    const dateCreated = text('dateCreated', '2018-10-30T01:01:25.475Z');
    const lastModified = text('lastModified', '2018-10-30T01:01:25.475Z');
    const notebookColor = color('notebookColor', '#808080');
    const isVisible = boolean('isVisible', false);

    return (
      <Notebook
        title={title}
        isVisible={isVisible}
        dateCreated={dateCreated}
        lastModified={lastModified}
        notebookColor={notebookColor}
        onClick={() => window.alert("You've clicked the notebook!")}
      />  
    );
  });
