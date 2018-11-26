import React from 'react';
import { storiesOf } from '@storybook/react';

import ToolColorSelect from './ToolColorSelect';

storiesOf('ToolColorSelect', module)
  .add('Basic ToolColorSelect Example', () => {

    return(
      <ToolColorSelect onColorSelection={(color) => window.alert(color)} />
    );
  }
);
