<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Tooltip, Button } from 'flowbite-svelte';

  const { Story } = defineMeta({
    title: 'Generated/Tooltip',
  id: 'tooltip-4cbe79c1',
    component: Tooltip,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" asChild>
  <div class="flex justify-center p-8">
    <Button>Hover me</Button>
    <Tooltip>This is a tooltip</Tooltip>
  </div>
</Story>

<Story name="Top" asChild>
  <div class="flex justify-center p-8">
    <Button>Top tooltip</Button>
    <Tooltip placement="top">Tooltip on top</Tooltip>
  </div>
</Story>

<Story name="Right" asChild>
  <div class="flex justify-center p-8">
    <Button>Right tooltip</Button>
    <Tooltip placement="right">Tooltip on right</Tooltip>
  </div>
</Story>

<Story name="Bottom" asChild>
  <div class="flex justify-center p-8">
    <Button>Bottom tooltip</Button>
    <Tooltip placement="bottom">Tooltip on bottom</Tooltip>
  </div>
</Story>

<Story name="Left" asChild>
  <div class="flex justify-center p-8">
    <Button>Left tooltip</Button>
    <Tooltip placement="left">Tooltip on left</Tooltip>
  </div>
</Story>

<Story name="Multiple Colors" asChild>
  <div class="flex gap-4 justify-center p-8 flex-wrap">
    <div>
      <Button color="blue">Blue</Button>
      <Tooltip color="blue">Blue tooltip</Tooltip>
    </div>
    <div>
      <Button color="green">Green</Button>
      <Tooltip color="green">Green tooltip</Tooltip>
    </div>
    <div>
      <Button color="red">Red</Button>
      <Tooltip color="red">Red tooltip</Tooltip>
    </div>
    <div>
      <Button color="purple">Purple</Button>
      <Tooltip color="purple">Purple tooltip</Tooltip>
    </div>
  </div>
</Story>

<Story name="With Content" asChild>
  <div class="flex justify-center p-8">
    <Button>Info</Button>
    <Tooltip>
      <div class="space-y-2">
        <p class="font-semibold">Tooltip Title</p>
        <p class="text-sm">This tooltip contains more detailed information with multiple lines of text.</p>
      </div>
    </Tooltip>
  </div>
</Story>