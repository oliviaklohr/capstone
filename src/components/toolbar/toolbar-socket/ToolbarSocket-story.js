import React from 'react';
import { storiesOf } from '@storybook/react';
import { selectV2 } from '@storybook/addon-knobs';

import ToolbarSocket, { Justify as selectableOptions } from "./ToolbarSocket.js";

storiesOf('ToolbarSocket', module)
  .add('choosable justification',  () => {
    const label = 'Justification';
    const defaultValue = selectableOptions.left;

    return(
      <ToolbarSocket justification={selectV2(label, selectableOptions, defaultValue)}>
        <div style={{ width: '30px', height: '30px', backgroundColor: 'red' }} />
      </ToolbarSocket>
    );
  }
);
