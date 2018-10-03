import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { toolbarSocketPropTypes } from './_toolbarSocketPropTypes';


import styles from './ToolbarSocketStyles';

const SOCKET_JUSTIFICATIONS = {
  left: 'Left',
  right: 'Right',
  center: 'Center',
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
  const justificationStyle = styles[`justify${justification}`];

  const toolbarSocketStyles = [
    styles.toolbarSocket,
    justificationStyle,
  ];

  return(
    <View style={toolbarSocketStyles}>
      {children}
    </View>
  );

};

ToolbarSocket.propTypes = propTypes;
ToolbarSocket.defaultProps = defaultProps;

export default ToolbarSocket;
export { SOCKET_JUSTIFICATIONS as Justify };
