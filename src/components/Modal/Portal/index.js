import React from 'react';
import styles from './styles.module.scss';

const Portal = ({ setRef }) => <div ref={setRef} className={styles.root} />;
export default Portal;
