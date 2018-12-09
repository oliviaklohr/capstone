import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';


import PageWrapper from './PageWrapper';

storiesOf('PageWrapper', module)
  .add('Basic PageWrapper Example', () => {
    const isFlush = boolean('isFlush', false);

    return(
      <PageWrapper isFlush={isFlush} >
        <div style={{ height: '500px', width: '100%', backgroundColor: 'red' }}>
          Cillum dolore elit reprehenderit nostrud eu culpa. Aliqua ullamco sit dolore officia mollit amet non id Lorem nostrud et duis amet dolore. Adipisicing do minim amet elit. Laborum et exercitation pariatur eiusmod anim et ut fugiat est id. Labore cupidatat veniam amet ullamco magna ex irure commodo. Occaecat quis elit laboris ex tempor adipisicing proident.
  
          Lorem adipisicing Lorem exercitation sit exercitation. Sunt anim exercitation est amet non occaecat amet. Nostrud occaecat eiusmod reprehenderit do labore sit. Ex ad culpa id sit ea tempor cillum.
  
          Consectetur duis voluptate consectetur dolore aute Lorem sint mollit ipsum voluptate laboris sit qui esse. Velit in tempor amet proident non est qui Lorem culpa. Qui esse nulla sit fugiat ullamco sit est aliquip quis culpa ea duis officia exercitation. Ad dolore non amet occaecat officia consectetur in mollit labore in dolor labore cupidatat. Lorem aliquip irure esse veniam ea.
  
          Veniam duis excepteur ad labore ad commodo consectetur veniam quis Lorem id exercitation. Ullamco excepteur sit reprehenderit exercitation dolore culpa proident nostrud cupidatat nulla veniam cupidatat occaecat. Tempor id excepteur dolor minim est in cupidatat nisi ullamco fugiat et aute anim reprehenderit. Sint commodo duis nulla labore fugiat ullamco elit irure eu do ipsum voluptate nisi eu.
        </div>
      </PageWrapper> 
    ) 
  });
