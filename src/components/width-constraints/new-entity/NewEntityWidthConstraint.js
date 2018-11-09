import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NewEntityWidthConstraint.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NewEntity = ({ children }) => (
  <div className={cx('create-new-width-constraint')}>{children}</div>
);

NewEntity.propTypes = propTypes;

export default NewEntity;

