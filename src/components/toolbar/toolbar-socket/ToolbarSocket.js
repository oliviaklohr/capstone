import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { toolbarSocketPropTypes } from './_toolbarSocketPropTypes';

import styles from './ToolbarSocket.css';

const cx = classNames.bind(styles);

const SOCKET_JUSTIFICATIONS = {
  left: 'left',
  right: 'right',
  center: 'center',
};

const propTypes = {
  /** content to insert into the socket */
  children: toolbarSocketPropTypes,
  /** justification to align content in */
  justification: PropTypes.oneOf(Object.values(SOCKET_JUSTIFICATIONS)),
};

const defaultProps = {
  children: undefined,
  justification: SOCKET_JUSTIFICATIONS.left
};

const ToolbarSocket = ({
  children,
  justification,
}) => {
  const justificationStyle = `justify-${justification}`;

  const toolbarClassNames = cx([
    'toolbar-socket',
    justificationStyle,
  ]);

  return(
    <div className={toolbarClassNames}>
      {children}
    </div>
  );

};

ToolbarSocket.propTypes = propTypes;
ToolbarSocket.defaultProps = defaultProps;

export default ToolbarSocket;
export { SOCKET_JUSTIFICATIONS as Justify };
