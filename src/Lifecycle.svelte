<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

  let count = 0;
  onMount(() => {
    // runs after the component is first rendered to the DOM
    console.log("onMount");
    const interval = setInterval(() => {
      count += 1;
    }, 1000);

    // If the onMount callback returns a function, that function will be called when the component is destroyed.
    return () => {
      clearInterval(interval);
    };
  });
  beforeUpdate(() => {
    // beforeUpdate will first run before the component has mounted
    console.log("beforeUpdate");
  });
  afterUpdate(() => {
    console.log("afterUpdate");
  });
  onDestroy(() => {
    console.log("onDestroy");
  });
</script>

<div>{count}</div>
