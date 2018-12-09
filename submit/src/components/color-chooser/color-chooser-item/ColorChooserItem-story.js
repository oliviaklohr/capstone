import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, text } from '@storybook/addon-knobs';

import ColorChooserItem from './ColorChooserItem';

const itemColor = color('Item Color', 'red');
const itemText = text('Icon');

storiesOf('ColorChooserItem', module)
  .add('unselected', () => (
    <ColorChooserItem color={itemColor} onClick={() => window.alert(itemColor)} icon={itemText} />
  ))
  .add('Selected', () => (
    <ColorChooserItem isSelected color={itemColor} onClick={() => window.alert(itemColor)} icon={itemText} />
  ));
