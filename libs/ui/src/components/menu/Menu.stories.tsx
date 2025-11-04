import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
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
    direction: 'bottom-right',
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

export const WithMenuButtonOpen: Story = {
  args: {
    ...WithMenuButton.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'menu' });
    await userEvent.click(button);
  },
  decorators: [
    (Story) => (
      <div style={{ height: '50px', width: '40px' }}>
        <Story />
      </div>
    )
  ]
}