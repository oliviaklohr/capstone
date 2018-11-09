import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CommandPalette from '../command-palette/CommandPalette';
import Toolbar from '../toolbar/Toolbar';

import styles from './NotebookMenuBar.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  onCreateNewCategory: PropTypes.func.isRequired,
  onCreateNewNotebook: PropTypes.func.isRequired,
};

const NotebookMenuBar = ({
  onCreateNewCategory,
  onCreateNewNotebook,
}) => {
  const leftCommandPaletteItems = [
    {
      iconName: 'Plus',
      isDisabled: false,
      onClick: onCreateNewCategory,
    },
    {
      iconName: 'Export',
      isDisabled: false,
      onClick: () => window.alert('you have clicked the EXPORT NOTES item!'),
    },
  ];

  const rightCommandPaletteItems = [
    {
      iconName: 'Magnify',
      isDisabled: false,
      onClick: () => window.alert('you have clicked the SEARCH NOTES item!'),
    },
    {
      iconName: 'Import',
      isDisabled: false,
      onClick: () => window.alert('you have clicked the IMPORT NOTES item!'),
    },
    {
      iconName: 'NotePlusOutline',
      isDisabled: false,
      onClick: onCreateNewNotebook,
    },
    {
      iconName: 'AccountOutline',
      isDisabled: false,
      onClick: () => window.alert('you have clicked the PROFILE item!'),
    },
  ]

  return (
    <header className={cx('notebook-menu-bar')}>
      <Toolbar
        leftSocketContent={<CommandPalette items={leftCommandPaletteItems} />}
        rightSocketContent={<CommandPalette items={rightCommandPaletteItems} />}
      />
    </header>
  );
};

NotebookMenuBar.propTypes = propTypes;

export default NotebookMenuBar;
