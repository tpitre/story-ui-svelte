<script context="module">
  import { Button } from 'flowbite-svelte';

  export const meta = {
    title: 'Flowbite/Button',
    component: Button,
    tags: ['autodocs'],
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Button {...args}>Button</Button>
</Template>

<Story name="Primary">
  <Button color="primary">Primary</Button>
</Story>

<Story name="Colors">
  <div class="flex gap-2 flex-wrap">
    <Button color="primary">Primary</Button>
    <Button color="blue">Blue</Button>
    <Button color="alternative">Alternative</Button>
    <Button color="dark">Dark</Button>
    <Button color="light">Light</Button>
    <Button color="green">Green</Button>
    <Button color="red">Red</Button>
    <Button color="yellow">Yellow</Button>
    <Button color="purple">Purple</Button>
  </div>
</Story>

<Story name="Sizes">
  <div class="flex gap-2 items-center flex-wrap">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>
</Story>

<Story name="Outlined">
  <div class="flex gap-2 flex-wrap">
    <Button outline color="primary">Primary</Button>
    <Button outline color="dark">Dark</Button>
    <Button outline color="green">Green</Button>
    <Button outline color="red">Red</Button>
    <Button outline color="yellow">Yellow</Button>
    <Button outline color="purple">Purple</Button>
  </div>
</Story>

<Story name="Pill">
  <div class="flex gap-2 flex-wrap">
    <Button pill color="primary">Primary</Button>
    <Button pill color="dark">Dark</Button>
    <Button pill color="green">Green</Button>
    <Button pill color="red">Red</Button>
  </div>
</Story>

<Story name="Disabled">
  <Button disabled>Disabled</Button>
</Story>
