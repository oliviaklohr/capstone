import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import shortid from 'shortid';
import ColorChooserItem from './color-chooser-item/ColorChooserItem';

import styles from './ColorChooser.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  colorOptionIcon: PropTypes.string,
};

const defaultProps = {
  onClick: () => {},
  colorOptionIcon: undefined,
};

const ColorChooser = ({ colors, onClick, colorOptionIcon}) => {
  const colorsMarkup = colors.map(color => <ColorChooserItem key={shortid.generate()} color={color} onClick={onClick} icon={colorOptionIcon} />);

  return(
    <div className={cx('color-chooser')}>
      {colorsMarkup}
    </div>
  );
};


ColorChooser.propTypes = propTypes;
ColorChooser.defaultProps = defaultProps;

ColorChooser.Item = ColorChooserItem;

export default ColorChooser;
