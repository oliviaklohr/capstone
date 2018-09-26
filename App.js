
import React from 'react';
import { Font, AppLoading } from 'expo';
import EntryPoint from './src/components/entry-point/EntryPoint';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({ 'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf') });
    this.setState({ fontsAreLoaded: true });
  }

  render() {
    const { fontsAreLoaded } = this.state;
    return fontsAreLoaded ? <EntryPoint /> : <AppLoading />;
  }
}

export default App;
