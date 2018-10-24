import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './CategoryDropdownItem.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  categoryName: PropTypes.string.isRequired,
};

const CategoryDropdownItem = ({ categoryName }) => {

  // Don't think I can style this but... Oh well
  return(
    <MenuItem value={{categoryName}} className={cx('category-dropdown-item')}>
      {categoryName}
    </MenuItem>
  );
};

CategoryDropdownItem.propTypes = propTypes;

export default CategoryDropdownItem;
