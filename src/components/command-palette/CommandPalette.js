import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-material-ui';

import IconButton from '../icon-button/IconButton';

import styles from './CommandPalette_Styles'

import IconButtonStyles from '../icon-button/IconButton_Styles';

class CommandPalette extends React.Component {
  constructor() {
    super();
    
    this.state = {
      supplyStyle1: false,
      supplyStyle2: false,
      supplyStyle3: false,
      supplyStyle4: false,
    };

    this.handleOnPress1 = this.handleOnPress1.bind(this);
    this.handleOnPress2 = this.handleOnPress2.bind(this);
    this.handleOnPress3 = this.handleOnPress3.bind(this);
    this.handleOnPress4 = this.handleOnPress4.bind(this);
  }

  handleOnPress1() {
    this.setState(prevState => ({
      supplyStyle1: !prevState.supplyStyle1,
    }));
  }
  handleOnPress2() {
    this.setState(prevState => ({
      supplyStyle2: !prevState.supplyStyle2,
    }));
  }
  handleOnPress3() {
    this.setState(prevState => ({
      supplyStyle3: !prevState.supplyStyle3,
    }));
  }
  handleOnPress4() {
    this.setState(prevState => ({
      supplyStyle4: !prevState.supplyStyle4,
    }));
  }

  render() {
    const {
      supplyStyle1,
      supplyStyle2,
      supplyStyle3,
      supplyStyle4
    } = this.state;

    const buttonStyle1 = supplyStyle1 ? IconButtonStyles.test : {};
    const buttonStyle2 = supplyStyle2 ? IconButtonStyles.test : {};
    const buttonStyle3 = supplyStyle3 ? IconButtonStyles.test : {};
    const buttonStyle4 = supplyStyle4 ? IconButtonStyles.test : {};
  
    return (
      // Need to theme buttons based on accent color
      // should be in _theme
      // think i found how but not sure how too port it over to here.
      <Fragment>
        {/* Icons might need changed */}
        <IconButton onPress={this.handleOnPress1} style={buttonStyle1} name='brush' />
        <IconButton onPress={this.handleOnPress2} style={buttonStyle2} name='create' />
        <IconButton onPress={this.handleOnPress3} style={buttonStyle3} name='healing' />
        <IconButton onPress={this.handleOnPress4} style={buttonStyle4} name='gesture' />
      </Fragment>
    );
  }
};

export default CommandPalette;
