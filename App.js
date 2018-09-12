/**
 * NOTE: Anything that you place within the confinds of the `render` method
 * below will end up becoming part of our App's UI. This component should be
 * treated SOLELY as a place from which to mount sub-components containing
 * actual content.
 */
import React from 'react';

import ExampleComponent from './src/components/example-component/ExampleComponent';

class App extends React.Component {
  render() {
    return (<ExampleComponent />);
  }
}

export default App;
