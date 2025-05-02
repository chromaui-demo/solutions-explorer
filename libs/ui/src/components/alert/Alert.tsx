import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Alert.module.css';

export type AlertStatus = 'success' | 'error' | 'warning' | 'info';
export type AlertVariant = 'primary' | 'secondary' | 'ghost';

export interface AlertProps {
  status?: AlertStatus;
  variant?: AlertVariant;
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  status = 'info',
  variant = 'primary',
  title,
  message,
  onClose,
  className = '',
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`${styles.alert} ${styles[status]} ${styles[variant]} ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.2 }}
      >
        <div className={styles.content}>
          {title && <h3 className={styles.title}>{title}</h3>}
          <p className={styles.message}>{message}</p>
        </div>
        {onClose && (
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close alert"
          >
            ×
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}; 