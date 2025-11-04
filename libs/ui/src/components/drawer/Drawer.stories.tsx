import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { within, userEvent } from '@storybook/test';
import Button from '../button/Button';
import styles from './Drawer.module.css';

import Drawer from './Drawer';

const meta = {
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    side: 'right',
    children: <div>Default content</div>
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const childrenTest = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div id='drawer-header' className={styles['drawer-header']}>
          <h2>Drawer Header</h2>
          <Button color='purple' variant='ghost' size='large' onClick={() => setIsOpen(false)}>
            X
          </Button>
        </div>
        <div id='drawer-content' className={styles['drawer-content']}>
          This is a placeholder for additional drawer content.
        </div>
      </div>
    )

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} side='right' children={childrenTest} />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Open Drawer' }));
  },
};