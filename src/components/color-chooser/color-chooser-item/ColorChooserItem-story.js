import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';

import ColorChooserItem from './ColorChooserItem';

storiesOf('ColorChooserItem', module)
  .add('Basic ColorChooserItem Example', () => {

    const itemColor = color('Item Color', 'red');

    return(
      <ColorChooserItem color={itemColor} onClick={() => window.alert(itemColor)} />
    );
  }
);
