import type { Meta, StoryObj } from '@storybook/svelte';
import { Card, Button, Badge } from 'flowbite-svelte';

const meta: Meta<Card> = {
  title: 'Generated/Product Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    Component: Card,
    props: {},
    slot: `
      <img 
        src="https://picsum.photos/400/300?random=1" 
        alt="Wireless Headphones"
        class="rounded-t-lg"
      />
      <div class="p-5">
        <div class="flex items-center justify-between mb-2">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wireless Headphones
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Premium noise-cancelling wireless headphones with superior sound quality and long-lasting battery life. Perfect for music lovers and professionals.
        </p>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$199.99</span>
        </div>
      </div>
    `,
  }),
};

export const WithButton: Story = {
  render: () => ({
    Component: Card,
    props: {},
    slot: `
      <img 
        src="https://picsum.photos/400/300?random=2" 
        alt="Smart Watch"
        class="rounded-t-lg"
      />
      <div class="p-5">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          Smart Watch Pro
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.
        </p>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$299.99</span>
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to Cart
          </button>
        </div>
      </div>
    `,
  }),
};

export const WithBadge: Story = {
  render: () => ({
    Component: Card,
    props: {},
    slot: `
      <div class="relative">
        <img 
          src="https://picsum.photos/400/300?random=3" 
          alt="Laptop Computer"
          class="rounded-t-lg"
        />
        <span class="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
          Sale
        </span>
      </div>
      <div class="p-5">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          Ultra Performance Laptop
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          High-performance laptop with the latest processor, stunning display, and all-day battery life for professionals on the go.
        </p>
        <div class="flex items-center justify-between">
          <div>
            <span class="text-sm text-gray-500 line-through mr-2">$1,499.99</span>
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$1,299.99</span>
          </div>
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buy Now
          </button>
        </div>
      </div>
    `,
  }),
};