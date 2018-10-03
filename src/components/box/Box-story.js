import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from "./Box.js";

storiesOf('Box', module)
  .add('basic box example', () => <Box />)
  .add('box with children', () => (
    <Box>
      <div style={{ width: '50%', height: '50%', backgroundColor: 'blue' }}>
        Some Child Content!
      </div>
    </Box>
  ));
