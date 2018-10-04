import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Toolbar from "./Toolbar.js";

storiesOf('Toolbar', module)
  .add("1 socket example", 
    withInfo(`
      This is a basic example of a 'Toolbar' with three sockets worth of content.
    `)(() => {
      const makeBox = (color) => <div style={{ width: '40px', height: '40px', backgroundColor: color }} />

      return (
        <Toolbar
          centerSocketContent={makeBox('blue')}
        />
      );
    })
  )
  .add("2 socket example", 
    withInfo(`
      This is a basic example of a 'Toolbar' with two sockets worth of content.
    `)(() => {
      const makeBox = (color) => <div style={{ width: '40px', height: '40px', backgroundColor: color }} />

      return (
        <Toolbar
          leftSocketContent={makeBox('red')}
          rightSocketContent={makeBox('green')}
        />
      );
    })
  )
  .add("3 socket example", 
    withInfo(`
      This is a basic example of a 'Toolbar' with three sockets worth of content.
    `)(() => {
      const makeBox = (color) => <div style={{ width: '40px', height: '40px', backgroundColor: color }} />

      return (
        <Toolbar
          leftSocketContent={makeBox('red')}
          centerSocketContent={makeBox('blue')}
          rightSocketContent={makeBox('green')}
        />
      );
    })
  );
