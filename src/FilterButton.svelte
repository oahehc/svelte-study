<script>
  export let filter = "all";
  export let onclick = (clicked) => {};
  $: onclick(filter); // trigger onclick prop when filter change
</script>
