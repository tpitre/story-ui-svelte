import type { Meta, StoryObj } from '@storybook/svelte';
import { Alert } from 'flowbite-svelte';

const meta: Meta<Alert> = {
  title: 'Generated/Warning Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'blue', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    color: 'yellow',
    children: 'Warning! Please review your information before submitting.',
  },
};

export const Danger: Story = {
  args: {
    color: 'red',
    children: 'Error! Something went wrong. Please try again.',
  },
};

export const Success: Story = {
  args: {
    color: 'green',
    children: 'Success! Your changes have been saved.',
  },
};

export const Info: Story = {
  args: {
    color: 'blue',
    children: 'Information: This is an informational message.',
  },
};