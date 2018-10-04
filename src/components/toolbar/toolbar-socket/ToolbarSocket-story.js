import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ToolbarSocket, { Justify } from "./ToolbarSocket.js";

storiesOf('ToolbarSocket', module)
  .add("justify={Justify.left}", 
    withInfo(`
      This is a basic example of a 'ToolbarSocket' with content justified to the left.
    `)(() => (
      <ToolbarSocket justification={Justify.left}>
        <div style={{ width: '30px', height: '30px', backgroundColor: 'red' }} />
      </ToolbarSocket>
    ))
  )
  .add("justify={Justify.right}", 
    withInfo(`
      This is a basic example of a 'ToolbarSocket' with content justified to the right.
    `)(() => (
      <ToolbarSocket justification={Justify.right}>
        <div style={{ width: '30px', height: '30px', backgroundColor: 'red' }} />
      </ToolbarSocket>
    ))
  )
  .add("justify={Justify.center}", 
    withInfo(`
      This is a basic example of a 'ToolbarSocket' with content justified to the center.
    `)(() => (
      <ToolbarSocket justification={Justify.center}>
        <div style={{ width: '30px', height: '30px', backgroundColor: 'red' }} />
      </ToolbarSocket>
    ))
  );
