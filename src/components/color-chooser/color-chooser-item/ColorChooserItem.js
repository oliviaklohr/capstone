import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FiberManualRecord } from '@material-ui/icons';
import classNames from 'classnames/bind';

import styles from './ColorChooserItem.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

const ColorChooserItem = ({ color, onClick, isDisabled }) => {

  // const Icon = materialIcons.FiberManualRecord;

  return(
    <div className={cx('color-chooser-item')} style={{color}} tabIndex='1' role='button' key={shortid.generate()} onClick={onClick} disabled={isDisabled}>
      <FiberManualRecord />
    </div>
  );
};

ColorChooserItem.propTypes = propTypes;

export default ColorChooserItem;
