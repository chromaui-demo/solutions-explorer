import React from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from '@storybook/test';

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

export const SecondItemExpanded: Story = {
  render: Default.render,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Find and click the second accordion item
    const secondAccordionButton = canvas.getByText('What is Storybook?');
    await userEvent.click(secondAccordionButton);

    // Verify the second item's content is visible
    const secondItemContent = canvas.getByText(/Storybook is an open source tool/i);
    await expect(secondItemContent).toBeInTheDocument();
  },
};
