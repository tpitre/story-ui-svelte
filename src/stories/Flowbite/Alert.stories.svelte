<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Alert } from 'flowbite-svelte';

  const { Story } = defineMeta({
    title: 'Flowbite/Alert',
    component: Alert,
    tags: ['autodocs'],
  });
</script>

<Story name="Info">
  <Alert>
    <span class="font-medium">Info alert!</span> This is an informational message.
  </Alert>
</Story>

<Story name="Colors">
  <div class="flex flex-col gap-4">
    <Alert color="blue">
      <span class="font-medium">Info!</span> This is an informational message.
    </Alert>
    <Alert color="green">
      <span class="font-medium">Success!</span> Operation completed successfully.
    </Alert>
    <Alert color="yellow">
      <span class="font-medium">Warning!</span> Please review before continuing.
    </Alert>
    <Alert color="red">
      <span class="font-medium">Error!</span> Something went wrong.
    </Alert>
    <Alert color="dark">
      <span class="font-medium">Dark!</span> A dark-themed alert.
    </Alert>
  </div>
</Story>

<Story name="WithBorder">
  <div class="flex flex-col gap-4">
    <Alert color="blue" border>
      <span class="font-medium">Info!</span> Alert with border accent.
    </Alert>
    <Alert color="green" border>
      <span class="font-medium">Success!</span> Alert with border accent.
    </Alert>
    <Alert color="red" border>
      <span class="font-medium">Error!</span> Alert with border accent.
    </Alert>
  </div>
</Story>

<Story name="Rounded">
  <div class="flex flex-col gap-4">
    <Alert rounded={false} color="blue">
      <span class="font-medium">Sharp corners</span> - No border radius.
    </Alert>
    <Alert color="blue">
      <span class="font-medium">Rounded</span> - Default border radius.
    </Alert>
  </div>
</Story>
