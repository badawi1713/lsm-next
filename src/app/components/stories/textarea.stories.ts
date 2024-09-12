import type { Meta, StoryObj } from '@storybook/react';

import { Textarea as TextareaComponent } from '../textarea';

const meta = {
  title: 'Textarea',
  component: TextareaComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    rows: { control: 'number' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextareaComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Textarea: Story = {
  args: {
    placeholder: 'Enter your text',
    rows: 5,
  },
};
