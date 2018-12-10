import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs';


import Paginator from "./Paginator.js";

storiesOf('Paginator', module)
  .add("Basic Paginator Example", () => {
    const displayedIndex = number('displayedIndex', 1);
    const totalPages = number('totalPages', 5);
    const displayColor = color('color', '#bdbdbd');
    const disabledColor = color('disabledColor', '#e0e0e0');

    return(
      <Paginator
        displayedIndex={displayedIndex}
        totalPages={totalPages}
        color={displayColor}
        disabledColor={disabledColor}
        onPrevClick={() => window.alert('prev arrow clicked!')}
        onNextClick={() => window.alert('next arrow clicked!')}
      />
    )}
  );
