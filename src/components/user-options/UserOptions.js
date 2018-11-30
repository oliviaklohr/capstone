import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/routes';



import styles from './UserOptions.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
};

const UserOptions = ({
  onDeleteClick,
  onLogOutClick,
}) => (
  <Card>
    <div className={cx('user-options')}>
      <Link to={LOGIN}>
        <Button color='primary' onClick={onLogOutClick} value='Submit' variant="contained">Log Out User</Button>
      </Link>
      <div className={cx('delete-margin')}>
        <Link to={LOGIN}>
          <Button color='secondary' onClick={onDeleteClick} value='Submit'>Delete User</Button>
        </Link>
      </div>
    </div>
  </Card>
);


UserOptions.propTypes = propTypes;

export default UserOptions;
