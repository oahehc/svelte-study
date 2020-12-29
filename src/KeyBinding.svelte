<script>
  export let value = "";
  function onCancel() {}
</script>

<input bind:value on:keydown={(e) => e.key === 'Escape' && onCancel()} />
