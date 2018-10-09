import PropTypes from 'prop-types';

export const toolbarSocketPropTypes = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
]);
