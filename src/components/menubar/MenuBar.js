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

const centerSocketData = [
  {
    iconName: 'Brush',
    isDisabled: false,
    onClick: () => window.alert('you have clicked the BRUSH item!'),
  },
  {
    iconName: 'Create',
    isDisabled: false,
    onClick: () => window.alert('you have clicked the HIGHLIGHTER item!'),
  },
  {
    iconName: 'Healing',
    isDisabled: false,
    onClick: () => window.alert('you have clicked the ERASER item!'),
  }
];

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

const Menubar = () => (
  <Toolbar
    leftSocketContent={generateMenuBarSocketMarkup(leftSocketData)}
    centerSocketContent={generateMenuBarSocketMarkup(centerSocketData)}
    rightSocketContent={generateMenuBarSocketMarkup(rightSocketData)}
  />
);

export default Menubar;
