import React from 'react';
import { storiesOf } from '@storybook/react';

import ComandPalette from './CommandPalette';

storiesOf('CommandPalette', module)
  .add('Basic CommandPalette Example', () => (
      <ComandPalette />
    )
  );
