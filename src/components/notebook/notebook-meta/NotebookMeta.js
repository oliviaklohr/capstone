import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NotebookMetaItem from './notebook-meta-item/NotebookMetaItem';

import styles from './NotebookMeta.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NotebookMeta = ({ children }) => (
  <div className={cx('notebook-meta')}>
    {children}
  </div>
);

NotebookMeta.propTypes = propTypes;
NotebookMeta.Item = NotebookMetaItem;

export default NotebookMeta;

