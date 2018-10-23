import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorChooserWidthConstraint from './ColorChooserWidthConstraint';

storiesOf('ColorChooserWidthConstraint', module)
  .add('Basic ColorChooserWidthConstraint Example', () => {

    return(
      <ColorChooserWidthConstraint>
        <div style={{ width: '100%', height: '200px', backgroundColor: 'purple' }}/>
      </ColorChooserWidthConstraint>
    );
  }
);
