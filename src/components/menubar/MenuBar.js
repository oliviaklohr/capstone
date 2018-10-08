import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { generateMenuBarSocketMarkup } from './_menuBarHelpers';

import Toolbar from '../toolbar/Toolbar';

import styles from './MenuBar.module.css';

const cx = classNames.bind(styles);


const leftSocketData = [
  {
    iconName: 'Menu',
    isDisabled: false,
    onClick: () => window.alert('you have clicked the MENU item!'),
  },
];

// TODO: follow this pattern to generate content for the center socket

const rightSocketData = [
  {
    iconName: 'Settings',
    isDisabled: false,
    onClick: () => window.alert('you have clicked the SETTINGS item!'),
  },
  {
    iconName: 'Group',
    isDisabled: false,
    onClick: () => window.alert('you have clicked the GROUP item!'),
  }
];

const Menubar = ({
  onLeftElementPress,
  onRightElementPress
}) => (
  <Toolbar
    leftSocketContent={generateMenuBarSocketMarkup(leftSocketData)}
    rightSocketContent={generateMenuBarSocketMarkup(rightSocketData)}
  />
);

export default Menubar;
