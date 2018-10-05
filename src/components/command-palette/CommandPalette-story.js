import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ComandPalette from './CommandPalette';

storiesOf('CommandPalette', module)
  .add('Basic CommandPalette Example', 
    withInfo('This shows a very basic rendition of a CommandPalette component')(() => (
      <ComandPalette />
    ))
  );
