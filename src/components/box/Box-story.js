import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Box from "./Box.js";

storiesOf('Box', module)
  .add('Basic Box Example',
    () => (
      <Box showChildren={boolean('Show Children', false)} foo="hello, world, 2!">
        <div style={{ width: '50%', height: '50%', backgroundColor: 'blue' }}>
          Some Child Content!
        </div>
      </Box>
    )
  );
