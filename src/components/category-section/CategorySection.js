import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CategorySection.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const CategorySection = ({
  name,
  children,
}) => {

  return(
    <div className={cx('category-section')}>
      <div className={cx('category-section-header')}>
        <h1>{name}</h1>
      </div>
      <div className={cx('category-section-grid')}>
        {React.Children.map(children, (child) => (
          <div className={cx('category-section-wrapper')}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );  
};

CategorySection.propTypes = propTypes;

export default CategorySection;
