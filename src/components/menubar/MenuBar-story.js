import React from 'react';
import { storiesOf } from '@storybook/react';

import Menubar from './MenuBar.js';

storiesOf('MenuBar', module)
  .add('Basic MenuBar Example', () => (
      <Menubar />
    )
  );
