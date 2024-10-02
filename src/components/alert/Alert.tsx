import styles from './Alert.module.css';
import { ReactNode } from 'react';

export const Alert = ({ children }: { children: ReactNode }) => {
  return <div className={styles.alert}>{children}</div>;
};
