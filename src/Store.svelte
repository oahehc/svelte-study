<script>
  import { onDestroy, onMount } from "svelte";
  import store from "./store.js";
  let counter = 0;
  let unsubscribe;
  onMount(() => (unsubscribe = store.subscribe((state) => (counter = state))));
  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });
  const reset = () => store.set(0);
  const increment = () => store.update((state) => state + 1);
</script>

<main>
  <span>The counter value is {counter}</span>
  <hr />
  <button on:click={increment}>Increment</button>
  <button on:click={reset}>Reset</button>
</main>
