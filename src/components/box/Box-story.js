import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from "./Box.js";

storiesOf('Box', module)
  .add('with text', () => <Box />)
