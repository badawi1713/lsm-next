import type { Meta, StoryObj } from '@storybook/react';

import { Input as InputComponent } from '../input';

const meta = {
  title: 'Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    placeholder: 'Enter your text',
  },
};
