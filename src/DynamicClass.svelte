<script lang="ts">
  export let count: number;
</script>

<div class:even={count % 2 === 0}>DynamicClass</div>
