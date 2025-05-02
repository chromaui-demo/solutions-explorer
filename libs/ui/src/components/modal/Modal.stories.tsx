import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import Button from '../button/Button';


const meta = {
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    closeOnEscape: {
      control: 'boolean',
    },
    closeOnBackdropClick: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalWithState = ({ children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {children}
      </Modal>
    </div>
  );
};

export const Default = {
  render: () => (
    <ModalWithState
      title="Example Modal"
      size="medium"
      closeOnEscape={true}
      closeOnBackdropClick={true}
    >
      <div>
        <p>This is an example modal with some content.</p>
        <p>You can add any content here, including forms, images, or other components.</p>
      </div>
      <div className="footer" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', padding: '10px' }}>
        <Button variant="secondary" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Confirm
        </Button>
      </div>
    </ModalWithState>
  ),
};

export const Small = {
  render: () => (
    <ModalWithState
      title="Small Modal"
      size="small"
      closeOnEscape={true}
      closeOnBackdropClick={true}
    >
      <div>
        <p>This is a small modal example.</p>
      </div>
    </ModalWithState>
  ),
};

export const Large = {
  render: () => (
    <ModalWithState
      title="Large Modal"
      size="large"
      closeOnEscape={true}
      closeOnBackdropClick={true}
    >
      <div>
        <p>This is a large modal example.</p>
      </div>
    </ModalWithState>
  ),
};

export const WithoutFooter = {
  render: () => (
    <ModalWithState
      title="Modal Without Footer"
      closeOnEscape={true}
      closeOnBackdropClick={true}
    >
      <div>
        <p>This modal doesn't have a footer.</p>
      </div>
    </ModalWithState>
  ),
};

