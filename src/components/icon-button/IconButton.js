import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-material-ui';

const propTypes = {
  /** string for the name of the icon to be rendered */
  name: PropTypes.string.isRequired,
  /** callback triggered when an icon is presed */
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  key: undefined,
};

const IconButton = ({
  name,
  onPress,
  ...props
}) => (
  <TouchableOpacity {...props} onPress={onPress}>
    <Icon name={name} />
  </TouchableOpacity>
);

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
