import React from 'react';
import { storiesOf } from '@storybook/react';


import ColorChooser from './ColorChooser';

storiesOf('ColorChooser', module)
  .add('Basic ColorChooser Example', () => {

    return(
      <ColorChooser colors={['red', 'orange', 'yellow', 'blue', 'purple']} onColorSelection={(color) => window.alert(color)} />
    );
  }
);
