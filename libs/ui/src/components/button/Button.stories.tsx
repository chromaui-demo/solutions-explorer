import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The button defaults to primary variant, medium size, and the blue color palette.
 */
export const Default: Story = {
  args: {
    children: "Button"
  }
};

export const Menu: Story = {
  args: {
    children: "201",
    variant: "primary",
    size: "large",
    color: "green"
  }
};