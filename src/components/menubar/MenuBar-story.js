import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Menubar from './MenuBar.js';

storiesOf('MenuBar', module)
  .add('Basic MenuBar Example', 
    withInfo('This shows a very basic rendition of a MenuBar component')(() => (
      <Menubar />
    ))
  );
