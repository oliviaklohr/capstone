import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Notebook from '../notebook/Notebook';

import CategorySection from './CategorySection';

storiesOf('CategorySection', module)
  .add('Basic CategorySection example', () => {
    const name = text('name', 'Category 1');
    return(
      <CategorySection name={name}>
        <div style={{ width: '100%', height: '88px', backgroundColor: 'red' }} />
        <div style={{ width: '100%', height: '88px', backgroundColor: 'green' }} />
        <div style={{ width: '100%', height: '88px', backgroundColor: 'blue' }} />
      </CategorySection>
    );
  })
  .add('CategorySection example w/ Notebooks', () => {
    const name = text('name', 'Category 1');
    return(
      <CategorySection name={name}>
        <Notebook
          title='Notebook 1'
          isVisible
          dateCreated='2018-10-30T01:01:25.475Z'
          lastModified='2018-10-30T01:01:25.475Z'
          notebookColor='#009688'
          onClick={() => window.alert("You've clicked the notebook!")}
        />
        <Notebook
          title='Notebook 2'
          dateCreated='2018-10-30T01:01:25.475Z'
          lastModified='2018-10-30T01:01:25.475Z'
          notebookColor='#ef6c00'
          onClick={() => window.alert("You've clicked the notebook!")}
        />
        <Notebook
          title='Notebook 3'
          dateCreated='2018-10-30T01:01:25.475Z'
          lastModified='2018-10-30T01:01:25.475Z'
          notebookColor='#512da8'
          onClick={() => window.alert("You've clicked the notebook!")}
        />
      </CategorySection>
    );
  });
