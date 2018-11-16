import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight} from '@mdi/js';

import styles from './Paginator.module.css';

const cx = classNames.bind(styles);

const DEFAULT_DISABLED_COLOR = '#e0e0e0';

const propTypes = {
  displayedIndex: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

const defaultProps = {
  color: '#bdbdbd',
  disabledColor: DEFAULT_DISABLED_COLOR,
};

const Paginator = ({
  displayedIndex,
  totalPages,
  color,
  disabledColor,
  onPrevClick,
  onNextClick,
}) => {
  const prevDisabled = displayedIndex === 1;
  const nextDisabled = displayedIndex === totalPages;
  const prevColor = !prevDisabled ? color : disabledColor;
  const nextColor = !nextDisabled ? color : disabledColor;

  const leftArrow = (
    <IconButton disabled={prevDisabled}>
      <Icon color={prevColor} size={1} onClick={onPrevClick} path={mdiArrowLeft} />
    </IconButton>
  );

  const rightArrow = (
    <IconButton disabled={nextDisabled}>
      <Icon color={nextColor} size={1} onClick={onNextClick} path={mdiArrowRight} />
    </IconButton>
  );
  return(
    <div style={{ color }} className={cx('paginator')}>
      {leftArrow}
      {displayedIndex} / {totalPages}
      {rightArrow}
    </div>
  );
};

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;

export default Paginator;

