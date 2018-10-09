import React from 'react';
import classNames from 'classnames/bind';
import CommandPalette from '../command-palette/CommandPalette';
import { leftSocketData, centerSocketData, rightSocketData } from './_menuBarData';
import Toolbar from '../toolbar/Toolbar';

import styles from './MenuBar.module.css';

const cx = classNames.bind(styles);

const Menubar = () => (
  <header className={cx('menu-bar')}>
    <Toolbar
      leftSocketContent={<CommandPalette items={leftSocketData} />}
      centerSocketContent={<CommandPalette items={centerSocketData} />}
      rightSocketContent={<CommandPalette items={rightSocketData} />}
    />
  </header>
);

export default Menubar;
