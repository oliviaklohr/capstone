import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NotebookDrawerItem.module.css';
import Card from '@material-ui/core/Card';
import BookOutlined from '@material-ui/icons/BookOutlined';

import NotebookTitle from '../notebook-title/NotebookTitle';
import NotebookMetaItem from '../notebook-meta/notebook-meta-item/NotebookMetaItem';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  notebookColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  notebookColor: '#808080',
};

const Notebook = ({
  title,
  category,
  notebookColor,
  onClick,
}) => {
  return (
    <div tabIndex='1' role='button' onClick={onClick}>
      <Card>
        <div className={cx('notebook')}>
          <span className={cx('icon')} style={{ color: notebookColor }}><BookOutlined fontSize='inherit' /></span>
          <div>
            <NotebookTitle label={title}/>
            <NotebookMetaItem>{category}</NotebookMetaItem>
          </div>
        </div>
      </Card>
    </div>
  );
};

Notebook.propTypes = propTypes;
Notebook.defaultProps = defaultProps;

export default Notebook;
