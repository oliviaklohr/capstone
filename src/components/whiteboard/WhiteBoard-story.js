import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs';

import WhiteBoard from './WhiteBoard.js';

storiesOf('WhiteBoard', module)
  .add('Basic WhiteBoard Example', () => {
    const options = {
      range: true,
      min: 1,
      max: 15,
      step: 1,
    };

    return(
      <WhiteBoard
        lineWidth={number('Line Width', 2, options)}
        penColor={color('Pen Color', 'red')}
      />
    );
  }
);
