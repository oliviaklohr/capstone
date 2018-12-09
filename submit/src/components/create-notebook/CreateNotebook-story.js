import React from 'react';
import { storiesOf } from '@storybook/react';

import CreateNotebook from './CreateNotebook';

storiesOf('CreateNotebook', module)
  .add('Basic CreateNotebook Example', () => {

    return(
      <CreateNotebook categories={['foo', 'bar', 'baz']} onCreateNotebook={() => window.alert('notebook created!')} />
    );
  }
);
