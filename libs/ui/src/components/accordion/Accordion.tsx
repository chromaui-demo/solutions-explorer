import React from 'react';
import styles from './Accordion.module.css';

export type AccordionProps = {
    children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
    return <div className={styles.accordion}>{children}</div>
};