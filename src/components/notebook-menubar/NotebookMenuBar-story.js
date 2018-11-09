import React from 'react';
import { storiesOf } from '@storybook/react';

import NotebookMenuBar from './NotebookMenuBar.js';

storiesOf('NotebookMenuBar', module)
  .add('Basic NotebookMenuBar Example', () => (
      <NotebookMenuBar />
    )
  );
