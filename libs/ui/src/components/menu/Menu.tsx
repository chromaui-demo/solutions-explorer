import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../button/Button';
import styles from './Menu.module.css';

type MenuProps = {
  items: { label: string; onClick: () => void }[];
  direction?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  children?: string;
  button?: {
    color?: 'cyan' | 'green' | 'yellow' | 'orange' | 'pink' | 'purple' | 'slate';
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'ghost';
  }
};

const Menu: React.FC<MenuProps> = ({ items, direction = 'bottom-right', children = '⋮', button }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getMotionProps = (direction: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right') => {
    const isTop = direction.startsWith('top');
    return {
        initial: { opacity: 0, scale: 0.95, y: isTop ? -10 : 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: isTop ? 10 : -10 },
        transition: { duration: 0.2, ease: 'easeOut' },
    }
  }

  return (
    <div className={styles.menuContainer} ref={containerRef}>
      <Button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        {...button}
      >
        {children}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={`${styles.menuList} ${styles[direction]}`}
            {...getMotionProps(direction)}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className={styles.menuItem}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
