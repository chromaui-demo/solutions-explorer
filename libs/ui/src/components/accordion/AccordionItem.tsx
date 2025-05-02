import React, { useState, useId } from 'react';
import styles from './Accordion.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export type AccordionItemProps = {
    title: string;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const id = useId();

    return (
        <div className={styles.item}>
            <button
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={`panel-${id}`}
                onClick={() => setOpen(!open)}
            >
                {title}
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={`panel-${id}`}
                        className={styles.panel}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className={styles.panelInner}>{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}