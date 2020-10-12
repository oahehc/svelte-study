# Svelte

---

## Resource

- [init project](https://svelte.dev/blog/the-easiest-way-to-get-started)
- [typescript](https://svelte.dev/blog/svelte-and-typescript)
- [tutorial](https://svelte.dev/tutorial/basics)

## Notes

### Contexts vs. stores

Contexts and stores seem similar. They differ in that stores are available to any part of an app, while a context is only available to a component and its descendants. This can be helpful if you want to use several instances of a component without the state of one interfering with the state of the others.

```js
// @parent component
import { onMount, setContext } from "svelte";
import { mapbox, key } from "./mapbox.js";

setContext(key, {
  getMap: () => map,
});
```

```js
// @children component
import { getContext } from "svelte";
import { mapbox, key } from "./mapbox.js";

const { getMap } = getContext(key);
const map = getMap();
```

### Special elements

- <svelte:self>, allows a component to contain itself recursively
- <svelte:component this={selected.component}/>, for dynamic component
- <svelte:window on:keydown={handleKeydown} bind:scrollY={y}/>, add event listeners or bind properties to the window object
  - innerWidth
  - innerHeight
  - outerWidth
  - outerHeight
  - scrollX
  - scrollY
  - online — an alias for window.navigator.onLine
- <svelte:body on:mouseenter={handleMouseenter} />
- <svelte:head>, for header
  ```HTML
  <svelte:head>
    <link rel="stylesheet" href="tutorial/dark-theme.css">
  </svelte:head>
  ```
- <svelte:options immutable/>, to specify compiler options.
  - immutable={true} — you never use mutable data, so the compiler can do simple referential equality checks to determine if values have changed
  - immutable={false} — the default. Svelte will be more conservative about whether or not mutable objects have changed
  - accessors={true} — adds getters and setters for the component's props
  - accessors={false} — the default
  - namespace="..." — the namespace where this component will be used, most commonly "svg"
  - tag="..." — the name to use when compiling this component as a custom element

### Module context

Code contained inside it will run once, when the module first evaluates, rather than when a component is instantiated.

```html
<!-- @AudioPlayer.svelte -->
<script context="module">
  const elements = new Set();

  export function stopAll() {
    elements.forEach((element) => {
      element.pause();
    });
  }
</script>
...
```

```html
<script>
  // import the function inside the module context
  import AudioPlayer, { stopAll } from "./AudioPlayer.svelte";
</script>
```
