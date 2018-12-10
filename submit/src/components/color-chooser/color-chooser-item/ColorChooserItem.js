import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import * as materialIcons from '@material-ui/icons';
import classNames from 'classnames/bind';

import styles from './ColorChooserItem.module.css';

const cx = classNames.bind(styles);

const FALLBACK_ICON = 'FiberManualRecord';

const propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  icon: PropTypes.string,
};

const defaultProps = {
  icon: FALLBACK_ICON,
  isSelected: false,
};

const ColorChooserItem = ({ color, onClick, icon, isSelected }) => {
  const Icon = materialIcons[icon] || materialIcons[FALLBACK_ICON];

  const colorChooserClassNames = cx(['color-chooser-item', { 'selected': isSelected }]);
  const returnColor = isSelected ? '' : color;

  return(
    <div className={colorChooserClassNames} style={{color}} tabIndex='1' role='button' key={shortid.generate()} onClick={() => onClick(returnColor)}>
      <Icon />
    </div>
  );
};

ColorChooserItem.propTypes = propTypes;
ColorChooserItem.defaultProps = defaultProps;

export default ColorChooserItem;
