<script context="module">
  import { Card, Button } from 'flowbite-svelte';

  export const meta = {
    title: 'Flowbite/Card',
    component: Card,
    tags: ['autodocs'],
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Story name="Basic">
  <Card class="max-w-sm">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Card Title
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      This is a basic card component from Flowbite Svelte. Cards are used to group related
      content and actions about a single subject.
    </p>
  </Card>
</Story>

<Story name="WithImage">
  <Card img="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=720&q=80" class="max-w-sm">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Norway Fjord Adventures
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      With Fjord Tours you can explore more of the magical fjord landscapes.
    </p>
    <Button>Read more</Button>
  </Card>
</Story>

<Story name="Horizontal">
  <Card horizontal class="max-w-xl">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Horizontal Card
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Cards can also be displayed horizontally for a different layout option.
    </p>
  </Card>
</Story>

<Story name="CallToAction">
  <Card class="max-w-sm text-center">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
      Get started today
    </h5>
    <p class="mb-5 text-base text-gray-500 dark:text-gray-400">
      Connect with Flowbite Svelte to build beautiful UIs fast.
    </p>
    <div class="flex justify-center gap-3">
      <Button>Get started</Button>
      <Button color="alternative">Learn more</Button>
    </div>
  </Card>
</Story>
