import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NotebookMetaItem.module.css';
import moment from 'moment';

const cx = classNames.bind(styles);

const propTypes = {
  isTime: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.string.isRequired,
};

const defaultProps = {
  isTime: false,
  label: null,
};

const NotebookMetaItem = ({
  isTime,
  label,
  children,
}) => {
  const child = isTime
    ? moment(children).format("MMM Do YY")
    : children;

  return(
    <span className={cx('notebook-meta-item')}>
      {label && <strong>{label}: </strong>}
      {child}
    </span>
  );
};

NotebookMetaItem.propTypes = propTypes;
NotebookMetaItem.defaultProps = defaultProps;

export default NotebookMetaItem;

