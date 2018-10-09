import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import shortid from 'shortid';
import IconButton from '@material-ui/core/IconButton/IconButton';
// NOTE: ONLY import icons with the '*' flag, everything else should be a named, or default export that you can import
import * as materialIcons from '@material-ui/icons';

const itemShape = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
};

const defaultProps = {
};

const CommandPalette = ({ items }) => {

  const markup = items.map(({ iconName, onClick, isDisabled }) => {
    const Icon = materialIcons[iconName];

    return(
      <IconButton key={shortid.generate()} onClick={onClick} disabled={isDisabled}>
        <Icon />
      </IconButton>
    );
  });

  return(
    <Fragment>
      {markup}
    </Fragment>
  );
};

CommandPalette.propTypes = propTypes;
CommandPalette.defaultProps = defaultProps;

export default CommandPalette;
