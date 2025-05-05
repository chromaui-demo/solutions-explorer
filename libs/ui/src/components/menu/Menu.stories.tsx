import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Edit', onClick: () => console.log('Edit') },
      { label: 'Delete', onClick: () => console.log('Delete') },
      { label: 'Share', onClick: () => console.log('Share') }
    ],
    direction: 'bottom-left',
    button: {
      color: 'slate',
      size: 'large',
      variant: 'ghost'
    }
  }
};

export const WithMenuButton: Story = {
  args: {
    items: [
      { label: 'Edit', onClick: () => console.log('Edit') },
      { label: 'Delete', onClick: () => console.log('Delete') },
      { label: 'Share', onClick: () => console.log('Share') }
    ],
    direction: 'bottom-left',
    children: 'menu'
  }
};