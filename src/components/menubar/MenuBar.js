import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CommandPalette from '../command-palette/CommandPalette';
import Toolbar from '../toolbar/Toolbar';
import styles from './MenuBar.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  onBackClick: PropTypes.func,
  onMenuClick: PropTypes.func,
  onBrushClick: PropTypes.func,
  onHighlighterClick: PropTypes.func,
  onEraserClick: PropTypes.func,
  onSettingsClick: PropTypes.func,
  onGroupClick: PropTypes.func,
};

const defaultProps = {
  onBackClick: () => window.alert('you have clicked the BACK item!'),
  onMenuClick: () => window.alert('you have clicked the MENU item!'),
  onBrushClick: () => window.alert('you have clicked the BRUSH item!'),
  onHighlighterClick: () => window.alert('you have clicked the HIGHLIGHTER item!'),
  onEraserClick: () => window.alert('you have clicked the ERASER item!'),
  onSettingsClick: () => window.alert('you have clicked the SETTINGS item!'),
  onGroupClick: () => window.alert('you have clicked the GROUP item!'),
};

const Menubar = ({
  onBackClick,
  onMenuClick,
  onBrushClick,
  onHighlighterClick,
  onEraserClick,
  onSettingsClick,
  onGroupClick,
}) => {
  const leftSocketData = [
    {
      iconName: 'KeyboardBackspace',
      isDisabled: false,
      onClick: onBackClick,
    },
    {
      iconName: 'Menu',
      isDisabled: false,
      onClick: onMenuClick,
    },
  ];

  const centerSocketData = [
    {
      iconName: 'Pen',
      isDisabled: false,
      onClick: onBrushClick,
    },
    {
      iconName: 'Marker',
      isDisabled: false,
      onClick: onHighlighterClick,
    },
    {
      iconName: 'Eraser',
      isDisabled: false,
      onClick: onEraserClick,
    }
  ];

  const rightSocketData = [
    {
      iconName: 'SettingsOutline',
      isDisabled: false,
      onClick: onSettingsClick,
    },
    {
      iconName: 'AccountMultipleOutline',
      isDisabled: false,
      onClick: onGroupClick,
    }
  ];

  return(
    <header className={cx('menu-bar')}>
      <Toolbar
        leftSocketContent={<CommandPalette items={leftSocketData} />}
        centerSocketContent={<CommandPalette items={centerSocketData} />}
        rightSocketContent={<CommandPalette items={rightSocketData} />}
      />
    </header>
  )
};

Menubar.propTypes = propTypes;
Menubar.defaultProps = defaultProps;

export default Menubar;
