import type { Meta, StoryObj } from '@storybook/react';

import { FileInput as FileInputComponent } from '../file-input';

const meta = {
  title: 'File Input',
  component: FileInputComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    onChange: { action: 'onChange' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileInputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FileInput: Story = {
  args: {
    placeholder: 'Select a file',
  },
};
