import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs';

import Canvas from './Canvas.js';

storiesOf('Canvas', module)
  .add('Basic Canvas Example', () => {
    const options = {
      range: true,
      min: 1,
      max: 15,
      step: 1,
    };

    return(
      <Canvas
        lineWidth={number('Line Width', 2, options)}
        penColor={color('Pen Color', 'red')}
      />
    );
  }
);
