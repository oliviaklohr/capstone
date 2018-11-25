import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import shortid from 'shortid';
import styles from './Notebook.module.css';
import Card from '@material-ui/core/Card';
import BookOutlined from '@material-ui/icons/BookOutlined';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';

import NotebookTitle from './notebook-title/NotebookTitle';
import NotebookMeta from './notebook-meta/NotebookMeta';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  lastModified: PropTypes.string.isRequired,
  notebookColor: PropTypes.string,
  // TODO: onCLick that will dispatch to redux the notebook that we want to load
  openNotebook: PropTypes.func.isRequired,
  deleteNotebook: PropTypes.func.isRequired,
};

const defaultProps = {
  isVisible: false,
  notebookColor: '#808080',
};

const Notebook = ({
  title,
  isVisible,
  dateCreated,
  lastModified,
  notebookColor,
  openNotebook,
  deleteNotebook,
}) => {
  const visibilityMode = isVisible ? 'Public' : 'Private';

  const deleteClicked = (event) => {
    event.stopPropagation(); // stop the event from registering as a 'click' on the notebook, when we just want to delete it
    deleteNotebook();
  };

  return (
    <div tabIndex='1' role='button' onClick={openNotebook}>
      <Card>
        <div className={cx('notebook')}>
          <div className={cx('notebook-contents')}>
            <span className={cx('icon')} style={{ color: notebookColor }}><BookOutlined fontSize='inherit' /></span>
            <div>
              <NotebookTitle label={title} />
              <NotebookMeta>
                <NotebookMeta.Item isTime label="Date Created">{dateCreated}</NotebookMeta.Item>
                <NotebookMeta.Item isTime label="Last Modified">{lastModified}</NotebookMeta.Item>
                <NotebookMeta.Item>{visibilityMode}</NotebookMeta.Item>
              </NotebookMeta>
            </div>
          </div>
          <IconButton key={shortid.generate()} onClick={deleteClicked}>
            <Icon path={mdiDeleteOutline} size={1} color="#808080" />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

Notebook.propTypes = propTypes;
Notebook.defaultProps = defaultProps;

export default Notebook;
