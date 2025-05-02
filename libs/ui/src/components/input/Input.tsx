import React, { forwardRef } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import styles from './Input.module.css';

export type InputProps = Omit<HTMLMotionProps<"input">, "ref"> & {
  label?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  width?: string | string[];
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, size = 'medium', className, placeholder, value, width = '95%', ...props }, ref) => {

    return (
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{ width }}
      >
        <div className={styles.inputWrapper}>
          <motion.input
            ref={ref}
            className={[
              styles.input,
              styles[size],
              error && styles.error,
              className,
            ]
              .filter(Boolean)
              .join(' ')}
            placeholder={placeholder}
            value={value}
            {...props}
          />
        </div>
        <AnimatePresence>
          {error && (
            <motion.span
              className={styles.errorMessage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 