import React from 'react';
import classNames from 'classnames/bind';
import Socket, { Justify } from './toolbar-socket/ToolbarSocket.js';

import { toolbarSocketPropTypes } from './toolbar-socket/_toolbarSocketPropTypes.js';

import styles from './Toolbar.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  /** content to display in the left socket of the toolbar */
  leftSocketContent: toolbarSocketPropTypes,
  /** content to display in the center socket of the toolbar */
  centerSocketContent: toolbarSocketPropTypes,
  /** content to display in the right socket of the toolbar */
  rightSocketContent: toolbarSocketPropTypes,
};

const defaultProps = {
  leftSocketContent: undefined,
  centerSocketContent: undefined,
  rightSocketContent: undefined,
};

const Toolbar = ({
  leftSocketContent,
  centerSocketContent,
  rightSocketContent,
}) => (
  <div className={cx('toolbar')}>
    <Socket justification={Justify.left}>
      {leftSocketContent}
    </Socket>
    <Socket justification={Justify.center}>
      {centerSocketContent}
    </Socket>
    <Socket justification={Justify.right}>
      {rightSocketContent}
    </Socket>
  </div>
);


Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
