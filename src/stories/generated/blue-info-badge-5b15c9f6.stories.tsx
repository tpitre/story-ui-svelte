import type { Meta, StoryObj } from '@storybook/svelte';
import { Badge } from 'flowbite-svelte';

const meta: Meta<Badge> = {
  title: 'Generated/Info Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'dark', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoBadge: Story = {
  args: {
    color: 'blue',
  },
  render: (args) => ({
    Component: Badge,
    props: args,
    slot: 'Info',
  }),
};

export const NewFeature: Story = {
  args: {
    color: 'blue',
  },
  render: (args) => ({
    Component: Badge,
    props: args,
    slot: 'New Feature',
  }),
};

export const InformationOnly: Story = {
  args: {
    color: 'blue',
  },
  render: (args) => ({
    Component: Badge,
    props: args,
    slot: 'Information',
  }),
};