import React, { useRef } from 'react';
import styles from './Button.module.css';
import { motion, HTMLMotionProps } from 'framer-motion';

export type ButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  color?: 'cyan' | 'green' | 'yellow' | 'orange' | 'pink' | 'purple' | 'slate';
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  color,
  disabled = false,
  loading = false,
  children,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    props.onClick?.(e);
  };

  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    color && styles[color],
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      className={classNames}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </motion.button>
  );
};

export default Button;
