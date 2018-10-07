import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from "./Box.js";

storiesOf('Box', module)
  .add('Basic Box Example', 
    withInfo('Test description')(() => (
      <Box foo="hello, world, 1!" />
    ))
  )
  .add('Box With Children',
    withInfo('example 2 description')(() => (
      <Box foo="hello, world, 2!">
        <div style={{ width: '50%', height: '50%', backgroundColor: 'blue' }}>
          Some Child Content!
        </div>
      </Box>
    ))
  );
