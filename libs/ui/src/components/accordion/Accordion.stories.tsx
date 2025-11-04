import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="What is Chromatic?">
        Chromatic is a visual testing platform for Storybook.
      </AccordionItem>
      <AccordionItem title="What is Storybook?">
        Storybook is an open source tool for building UI components in isolation...
      </AccordionItem>
    </Accordion>
  ),
};
