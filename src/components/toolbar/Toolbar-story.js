import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';

import Toolbar from "./Toolbar.js";
const makeBox = (color) => <div style={{ width: '40px', height: '40px', backgroundColor: color }} />
const defaultColor = '#f00';

storiesOf('Toolbar', module)
  .add("1 socket example", () => (
    <Toolbar
      centerSocketContent={makeBox(color('Left Color', defaultColor))}
    />
  ))
  .add("2 socket example", () => (
    <Toolbar
      leftSocketContent={makeBox(color('Left Color', defaultColor))}
      rightSocketContent={makeBox(color('Right Color', defaultColor))}
    />
  ))
  .add("3 socket example", () => (
    <Toolbar
      leftSocketContent={makeBox(color('Left Color', defaultColor))}
      centerSocketContent={makeBox(color('Center Color', defaultColor))}
      rightSocketContent={makeBox(color('Right Color', defaultColor))}
    />
  ));
