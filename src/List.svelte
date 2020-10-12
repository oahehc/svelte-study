<script lang="ts">
  type ListType = {
    id: string;
    name: string;
  }[];
  export let data: ListType;
</script>

<style>
  ul {
    text-align: left;
    max-width: 200px;
    margin: 0 auto;
  }
</style>

<ul>
  {#each data as item, idx}
    <li>
      <a target="_blank" href="https://www.youtube.com/watch?v={item.id}">
        {idx + 1}:
        {item.name}
      </a>
    </li>
  {/each}
</ul>
