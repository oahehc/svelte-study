<script lang="ts">
  export let initCount: number;
  let count = Number.isInteger(initCount) ? initCount : 1;
  let double: number;
  function addCount() {
    count += 1;
  }
  $: {
    double = count * 2;
  }

  // you can do so by accessing $$props directly. It's not generally recommended, as it's difficult for Svelte to optimise, but it's useful in rare cases.
  console.log("props:", $$props);
</script>

<div>
  <button on:click={addCount}>ADD</button>
  <p>{count} * 2 = {double}</p>
  {#if count > 10}
    <p>Number is greater than 10</p>
  {:else if 5 > count}
    <p>Number is less than 5</p>
  {:else}
    <p>Number is between 5 and 10</p>
  {/if}
</div>
