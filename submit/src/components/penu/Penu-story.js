import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Penu, { Directions } from './Penu.js';
import { defaultOptions } from './_defaultPenuOptions';

storiesOf('Penu', module)
  .add('Basic Penu Example', () => {
    let directionChooser = select('Direction', Object.values(Directions), Directions.up );

    return (
      <Penu options={defaultOptions} direction={directionChooser} />
    );
  });
