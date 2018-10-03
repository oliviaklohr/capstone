import React from 'react';
import classNames from "classnames/bind";
import styles from './Box.css';

const cx = classNames.bind(styles);

const Box = () => (
  <div className={cx('box')}>
    Hello, World!
  </div>
);

export default Box;
