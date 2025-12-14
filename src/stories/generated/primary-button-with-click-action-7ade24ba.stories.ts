import type { Meta, StoryObj } from '@storybook/svelte';
import { Button } from 'flowbite-svelte';

const meta: Meta<Button> = {
  title: 'Generated/Primary Button with Click Action',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'blue', 'alternative', 'dark', 'light', 'green', 'red', 'yellow', 'purple'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'md',
  },
};

export const WithClickAction: Story = {
  args: {
    color: 'primary',
    size: 'md',
    onclick: () => {
      alert('Button clicked!');
    },
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'lg',
    onclick: () => {
      console.log('Large button clicked');
    },
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'sm',
    onclick: () => {
      console.log('Small button clicked');
    },
  },
};