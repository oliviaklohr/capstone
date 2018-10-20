import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ColorChooserItem from './color-chooser-item/ColorChooserItem';

import styles from './ColorChooser.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ColorChooser = ({ children }) => (
  <div className={cx('color-chooser')}>
    {children}
  </div>
);


ColorChooser.propTypes = propTypes;

ColorChooser.Item = ColorChooserItem;

export default ColorChooser;
