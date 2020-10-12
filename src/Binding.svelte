<script>
  let name = "world";
  let yes = false;
  let scoops = 1;
</script>

<div>
  <input bind:value={name} />
  <h1>Hello {name}!</h1>
</div>
<label>
  <input type="checkbox" bind:checked={yes} />
  {#if yes}<span>Yep~~~</span>{:else}<span>No oh~~~</span>{/if}
</label>
<div>
  <label>
    <input type="radio" bind:group={scoops} value={1} />
    One scoop
  </label>
  <label>
    <input type="radio" bind:group={scoops} value={2} />
    Two scoops
  </label>
  <label>
    <input type="radio" bind:group={scoops} value={3} />
    Three scoops
  </label>
</div>
