import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './NotebookTitle.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  label: PropTypes.string.isRequired,
};

const NotebookTitle = ({ label }) => (
  <div className={cx('notebook-title')}>{label}</div>
);

NotebookTitle.propTypes = propTypes;

export default NotebookTitle;

