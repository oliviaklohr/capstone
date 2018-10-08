import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';

import Toolbar from "./Toolbar.js";
const makeBox = (color) => <div style={{ width: '40px', height: '40px', backgroundColor: color }} />
const defaultColor = '#f00';

storiesOf('Toolbar', module)
  .add("1 socket example", () => (
    <Toolbar
      centerSocketContent={makeBox(color('Left Socket Color', defaultColor))}
    />
  ))
  .add("2 socket example", () => (
    <Toolbar
      leftSocketContent={makeBox(color('Left Socket Color', defaultColor))}
      rightSocketContent={makeBox(color('Right Socket Color', defaultColor))}
    />
  ))
  .add("3 socket example", () => (
    <Toolbar
      leftSocketContent={makeBox(color('Left Socket Color', defaultColor))}
      centerSocketContent={makeBox(color('Center Socket Color', defaultColor))}
      rightSocketContent={makeBox(color('Right Socket Color', defaultColor))}
    />
  ));
