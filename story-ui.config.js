/**
 * Story UI Configuration for Svelte + Flowbite
 *
 * This configuration tells Story UI how to work with this Svelte project.
 * The componentFramework property is used to route to the correct
 * framework-specific discovery methods.
 */
export default {
  // Path where generated stories will be saved
  generatedStoriesPath: './src/stories/generated/',

  // Story title prefix in Storybook sidebar
  storyPrefix: 'Generated/',

  // Default author for generated stories
  defaultAuthor: 'Story UI AI',

  // Import path for components (flowbite-svelte package)
  importPath: 'flowbite-svelte',

  // Framework for story generation (svelte)
  framework: 'svelte',

  // Component framework for discovery routing
  // This tells Story UI to use Svelte-specific component discovery
  componentFramework: 'svelte',

  // Components will be discovered dynamically from flowbite-svelte
  components: [],

  // Layout rules for component composition
  layoutRules: {
    multiColumnWrapper: 'div',
    columnComponent: 'div',
    containerComponent: 'div',
    layoutExamples: {
      twoColumn: `<div class="grid grid-cols-2 gap-4">
  <div>Column 1 content</div>
  <div>Column 2 content</div>
</div>`,
      threeColumn: `<div class="grid grid-cols-3 gap-4">
  <div>Column 1 content</div>
  <div>Column 2 content</div>
  <div>Column 3 content</div>
</div>`
    },
    prohibitedElements: []
  },

  // Sample Svelte story template
  sampleStory: `<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button } from 'flowbite-svelte';
</script>

<Meta title="Generated/Sample" component={Button} />

<Story name="Default">
  <Button>Click me</Button>
</Story>`
};
