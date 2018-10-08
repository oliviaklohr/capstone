import React from 'react';
import { storiesOf } from '@storybook/react';

import ToolbarSocket, { Justify } from "./ToolbarSocket.js";

storiesOf('ToolbarSocket', module)
  .add("justify={Justify.left}",  () => (
      <ToolbarSocket justification={Justify.left}>
        <div style={{ width: '30px', height: '30px', backgroundColor: 'red' }} />
      </ToolbarSocket>
    )
  )
  .add("justify={Justify.right}", () => (
      <ToolbarSocket justification={Justify.right}>
        <div style={{ width: '30px', height: '30px', backgroundColor: 'red' }} />
      </ToolbarSocket>
    )
  )
  .add("justify={Justify.center}", () => (
      <ToolbarSocket justification={Justify.center}>
        <div style={{ width: '30px', height: '30px', backgroundColor: 'red' }} />
      </ToolbarSocket>
    )
  );
