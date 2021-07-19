import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const Wrapper = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};

export default Wrapper;
