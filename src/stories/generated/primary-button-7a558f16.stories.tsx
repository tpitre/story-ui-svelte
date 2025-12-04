import type { Meta, StoryObj } from '@storybook/svelte';
import { Button } from 'flowbite-svelte';

const meta: Meta<Button> = {
  title: 'Generated/Primary Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'alternative', 'dark', 'light', 'green', 'red', 'yellow', 'purple'],
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
  render: (args) => ({
    Component: Button,
    props: args,
    slot: 'Click me',
  }),
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'lg',
  },
  render: (args) => ({
    Component: Button,
    props: args,
    slot: 'Large Primary Button',
  }),
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'sm',
  },
  render: (args) => ({
    Component: Button,
    props: args,
    slot: 'Small Primary Button',
  }),
};