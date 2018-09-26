import React, { Fragment } from "react";
import { Text, SafeAreaView } from 'react-native';
import { ThemeContext, getTheme } from 'react-native-material-ui';
import Menubar from '../menubar/Menubar';
import Penu from '../penu/Penu';

import uiTheme from '../_theme';

import styles from './EntryPoint_Styles';

/**
 * NOTE: Anything that you place within the confinds of the `render` method
 * below will end up becoming part of our App's UI. This component should be
 * treated SOLELY as a place from which to mount sub-components containing
 * actual content.
 */
class EntryPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNotificationDisplayed: false,
      rightNotificationDisplayed: false,
    };

    this.handleLeftElementClick = this.handleLeftElementClick.bind(this);
    this.handleRightElementClick = this.handleRightElementClick.bind(this);
  }

  handleLeftElementClick() {
    this.setState(prevState => ({
      leftNotificationDisplayed: !prevState.leftNotificationDisplayed
    }));
  }

  handleRightElementClick() {
    this.setState(prevState => ({
      rightNotificationDisplayed: !prevState.rightNotificationDisplayed
    }));
  }

  render() {
    const { leftNotificationDisplayed, rightNotificationDisplayed } = this.state;

    return(
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Fragment>
          <SafeAreaView style={styles.notch} />
          <SafeAreaView style={styles.container}>
            <Menubar
              onLeftElementPress={this.handleLeftElementClick}
              onRightElementPress={this.handleRightElementClick}
            />
            { leftNotificationDisplayed &&
              <Text>THE LEFT ELEMENT HAS BEEN CLICKED!</Text>
            }
            { rightNotificationDisplayed &&
              <Text>THE RIGHT ELEMENT HAS BEEN CLICKED!</Text>
            }
            <Penu />
          </SafeAreaView>
        </Fragment>
      </ThemeContext.Provider>
    );
  }
};

export default EntryPoint;
