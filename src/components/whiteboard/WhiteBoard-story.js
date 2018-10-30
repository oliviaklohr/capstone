import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs';


import Whiteboard from './Whiteboard-container';


storiesOf('Whiteboard', module)
  .add('Entire Whiteboard', () => {

    const lineWidthOptions = {
      range: true,
      min: 1,
      max: 15,
      step: 1,
    };

    const canvasProps = {
      lineWidth: number('Line Width', 2, lineWidthOptions),
      penColor: color('Pen Color', 'red'),
    };
    
    return(
      <Whiteboard canvasProps={canvasProps} />
    );
  }
);
