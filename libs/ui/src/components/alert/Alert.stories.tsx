import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta = {
  component: Alert,
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SuccessPrimary = {
  args: {
    status: 'success',
    variant: 'primary',
    title: 'Success',
    message: '206',
  },
};

export const ErrorSecondary = {
  args: {
    status: 'error',
    variant: 'secondary',
    title: 'Error',
    message: 'There was an error processing your request.',
  },
};

export const WarningGhost = {
  args: {
    status: 'warning',
    variant: 'ghost',
    title: 'Warning',
    message: 'Please review your changes before proceeding.',
  },
};

export const InfoPrimary = {
  args: {
    status: 'info',
    variant: 'primary',
    title: 'Information',
    message: 'This is an informational message.',
  },
};

export const WithoutTitle = {
  args: {
    status: 'info',
    variant: 'secondary',
    message: 'This alert does not have a title.',
  },
};

export const Dismissible = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true);

    return isVisible ? (
      <Alert
        status="info"
        variant="secondary"
        title="Dismissible Alert"
        message="This alert can be dismissed by clicking the close button."
        onClose={() => setIsVisible(false)}
      />
    ) : null;
  },
}; 