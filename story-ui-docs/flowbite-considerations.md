# Flowbite Svelte Design Considerations

## Component Spacing Conventions

### Card Components
When using the `Card` component, follow these spacing patterns:

```svelte
<Card class="max-w-sm">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Title Here
  </h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Description text goes here.
  </p>
  <Button>Action</Button>
</Card>
```

**Key spacing classes:**
- Use `mb-2` on headings (h5) for spacing below title
- Use `mb-3` on paragraphs for spacing before buttons
- Use `max-w-sm`, `max-w-md`, or `max-w-lg` to constrain card width

### Button Spacing in Groups
When displaying multiple buttons, use flex with gap:

```svelte
<div class="flex gap-2 flex-wrap">
  <Button color="primary">Primary</Button>
  <Button color="blue">Blue</Button>
</div>
```

### Form Elements
For form layouts, use consistent vertical spacing:

```svelte
<form class="flex flex-col gap-4">
  <Label>
    Email
    <Input type="email" placeholder="email@example.com" />
  </Label>
  <Label>
    Password
    <Input type="password" />
  </Label>
  <Button type="submit">Submit</Button>
</form>
```

## Typography Classes

### Headings
- Primary headings: `text-2xl font-bold tracking-tight text-gray-900 dark:text-white`
- Secondary headings: `text-xl font-semibold text-gray-900 dark:text-white`
- Section headings: `text-lg font-medium text-gray-900 dark:text-white`

### Body Text
- Primary text: `font-normal text-gray-700 dark:text-gray-400`
- Secondary text: `text-sm text-gray-500 dark:text-gray-400`
- Small text: `text-xs text-gray-400 dark:text-gray-500`

## Dark Mode Support
Always include dark mode variants for text colors:
- Light text on dark: `dark:text-white` or `dark:text-gray-200`
- Muted text on dark: `dark:text-gray-400`
- Background aware: `dark:bg-gray-800`

## Common Patterns

### Card with Image
```svelte
<Card img="https://example.com/image.jpg" class="max-w-sm">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Card Title
  </h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Card description.
  </p>
  <Button>Learn More</Button>
</Card>
```

### Horizontal Card
```svelte
<Card horizontal img="https://example.com/image.jpg" class="max-w-xl">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Horizontal Card
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">
    Description text.
  </p>
</Card>
```

## Alert Components
Use Alert with appropriate color for context:

```svelte
<Alert color="blue">
  <span class="font-medium">Info:</span> Informational message.
</Alert>
<Alert color="red">
  <span class="font-medium">Error:</span> Error message.
</Alert>
<Alert color="green">
  <span class="font-medium">Success:</span> Success message.
</Alert>
```

## Responsive Design
Use Tailwind responsive prefixes for mobile-first design:
- `sm:` for small screens (640px+)
- `md:` for medium screens (768px+)
- `lg:` for large screens (1024px+)

Example:
```svelte
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Cards here -->
</div>
```
