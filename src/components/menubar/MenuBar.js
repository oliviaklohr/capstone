import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import Toolbar from '../toolbar/Toolbar';

import styles from './MenuBar.css';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Callback function triggered when the left toolbar item is clicked
   */
  onLeftElementPress: PropTypes.func,
  /**
   * Callback function triggered when the right toolbar item is clicked
   */
  // Need to handle each of these elements differently....
  onRightElementPress: PropTypes.func,
};

const defaultProps = {
  onLeftElementPress: () => {},
  onRightElementPress: () => {},
};

// TODO: delete everything between the lines, once you've added real items to your menubar
//=================
const Block = ({ children }) => (
  <div className={cx('testBlock')}>
    <p>{children}</p>
  </div>
)
//=================

const Menubar = ({
  onLeftElementPress,
  onRightElementPress
}) => {
  // Probably should figure out how to abstract these elements
  // Since the menubar will have one look in the drawing canvas and another
  // on the main notebook generation page...
  // Or will I just make a different component for that too?
  return (
    <header className={cx('container')}>
      {/* <Toolbar
        leftSocketContent={
          <Fragment>
            <Block>1a</Block>
          </Fragment>
        }
        centerSocketContent={<CommandPalette />}
        rightSocketContent={
        <Fragment>
          <Block>3a</Block>
          <Block>3b</Block>
          <Block>3c</Block>
        </Fragment>
        }
      /> */}
      Hello, world!
    </header>
  );
};

Menubar.propTypes = propTypes;
Menubar.defaultProps = defaultProps;

export default Menubar;
