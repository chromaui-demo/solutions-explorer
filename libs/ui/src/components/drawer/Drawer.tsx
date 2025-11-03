import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Drawer.module.css';
type Side = 'left' | 'right' | 'top' | 'bottom';

export type DrawerProps = {
    isOpen?: boolean;
    onClose: () => void;
    children: ReactNode;
    side?: Side;
}

const drawerVariants = {
    hidden: (side: Side) => {
        switch (side) {
            case 'left':
                return { x: '-100%' };
            case 'right':
                return { x: '100%' };
            case 'top':
                return { y: '-100%' };
            case 'bottom':
                return { y: '100%' };
            default:
                return {};
        }        
    },
    visible: { x: 0, y: 0, transition: { type: 'tween', duration: 0.3 } },
    exit: (side: Side) => {
        switch (side) {
            case 'left':
                return { x: '-100%', transition: { type: 'tween', duration: 0.3 } };
            case 'right':
                return { x: '100%', transition: { type: 'tween', duration: 0.3 } };
            case 'top':
                return { y: '-100%', transition: { type: 'tween', duration: 0.3 } };
            case 'bottom':
                return { y: '100%', transition: { type: 'tween', duration: 0.3 } };
            default:
                return {};
        }
    }
}

const Drawer: React.FC<DrawerProps> = ({ isOpen = false, onClose, children, side = 'right' }) => {
    const getPositionClasses = () => {
        switch (side) {
            case 'left':
                return styles['position-left'];
            case 'right':
                return styles['position-right'];
            case 'top':
                return styles['position-top'];
            case 'bottom':
                return styles['position-bottom'];
            default:
                return '';
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div 
                        className={styles.backdrop}
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Drawer */}
                    <motion.div 
                        className={`${styles.drawer} ${getPositionClasses()}`}
                        custom={side}
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Drawer;