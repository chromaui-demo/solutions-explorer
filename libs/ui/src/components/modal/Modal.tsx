import React, { FC, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Button from '../button/Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnEscape = true,
  closeOnBackdropClick = true,
}) => {
  useEffect(() => {
    if (closeOnEscape) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose, closeOnEscape]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className={`${styles.modal} ${styles[size]}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.header}>
              {title && <h2 className={styles.title}>{title}</h2>}
              <Button
                variant="ghost"
                size="small"
                onClick={onClose}
                aria-label="Close modal"
              >
                X
              </Button>
            </div>
            <div className={styles.content}>{children}</div>
            {footer && <div className={styles.footer}>{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Check if we're in Storybook by looking for the storybook class
  const isStorybook = document.querySelector('.sb-show-main') !== null;
  
  if (!isStorybook) {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
}; 