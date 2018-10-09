import React from 'react';
import { storiesOf } from '@storybook/react';

import CommandPalette from './CommandPalette';

storiesOf('CommandPalette', module)
  .add('Basic CommandPalette Example', () => {

    const icons = [
      {
        iconName: 'Brush',
        onClick: () => window.alert('you have clicked the BRUSH item!'),
      },
      {
        iconName: 'Create',
        onClick: () => window.alert('you have clicked the CREATE item!'),
      },
    ];

    return(
      <CommandPalette items={icons} />
    );
  }
  );
