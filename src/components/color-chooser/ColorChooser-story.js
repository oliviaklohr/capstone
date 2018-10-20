import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorChooser from './ColorChooser';

storiesOf('ColorChooser', module)
  .add('Basic ColorChooser Example', () => {
    return(
      <ColorChooser>
        <ColorChooser.Item color='red' onClick={() => window.alert('red')} />
        <ColorChooser.Item color='orange' onClick={() => window.alert('orange')} />
        <ColorChooser.Item color='yellow' onClick={() => window.alert('yellow')} />
        <ColorChooser.Item color='green' onClick={() => window.alert('green')} />
        <ColorChooser.Item color='blue' onClick={() => window.alert('blue')}  />
        <ColorChooser.Item color='purple' onClick={() => window.alert('purple')} />
      </ColorChooser>
    );
  }
);
