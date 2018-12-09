import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './PageWrapper.module.css';

const cx = classNames.bind(styles);

const POSITION_OPTIONS = {
  start: 'start',
  center: 'center',
  end: 'end',
};

const propTypes = {
  /** content to be displayed on the page */
  children: PropTypes.node.isRequired,
  /** if provided, the pageWrapper flush-mounts whatever it's children */
  isFlush: PropTypes.bool,
  isLoading: PropTypes.bool,
  snackbar: PropTypes.node,
  verticalPosition: PropTypes.oneOf(Object.values(POSITION_OPTIONS)),
  horizontalPosition: PropTypes.oneOf(Object.values(POSITION_OPTIONS)),
};

const defaultProps = {
  isFlush: false,
  isLoading: false,
  snackbar: null,
  verticalPosition: POSITION_OPTIONS.start,
  horizontalPosition: POSITION_OPTIONS.start,
};

const PageWrapper = ({
  children,
  isFlush,
  isLoading,
  snackbar,
  verticalPosition,
  horizontalPosition,
}) => {
  const pageWrapperClassNames = cx([
    'page-wrapper',
    `vertical-${verticalPosition}`,
    `horizontal-${horizontalPosition}`,
    { 'flush': isFlush },
  ]);

  const content = isLoading
    ? ( <CircularProgress size={100} /> )
    : children;

  return (
    <Fragment>
      <main className={pageWrapperClassNames}>
        {content}
      </main>
      {snackbar}
    </Fragment>
  );
};


PageWrapper.propTypes = propTypes;
PageWrapper.defaultProps = defaultProps;

export default PageWrapper;
export { POSITION_OPTIONS as Position }

