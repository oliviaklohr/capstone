import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs';


import App from './App-container';


storiesOf('App', module)
  .add('Entire App', () => {

    const lineWidthOptions = {
      range: true,
      min: 1,
      max: 15,
      step: 1,
    };

    const whiteboardProps = {
      lineWidth: number('Line Width', 2, lineWidthOptions),
      penColor: color('Pen Color', 'red'),
    };
    
    return(
      <App whiteboardProps={whiteboardProps} />
    );
  }
);
