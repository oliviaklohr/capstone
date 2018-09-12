import React from 'react';
import ExampleComponent from '../ExampleComponent';

import renderer from 'react-test-renderer';

it ('renders without crashing', () =>{
  const rendered = renderer.create(<ExampleComponent />).toJSON();
  expect(rendered).toMatchSnapshot();
});
