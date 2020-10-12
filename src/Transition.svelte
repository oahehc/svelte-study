<script>
  import { fade, fly, slide } from "svelte/transition";
  let visible = true;
  let status = "init";

  // custom transition effect
  function typewriter(node, { speed = 50 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: (t) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }

  //
  let i = 5;
  let items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
</script>

<style>
  div {
    width: 100%;
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
</style>

<div>
  <label>
    <input type="checkbox" bind:checked={visible} />
    visible:
    {status}
  </label>
  {#if visible}
    <p
      in:fly={{ y: 200, duration: 2000 }}
      out:fade
      on:introstart={() => (status = 'intro started')}
      on:outrostart={() => (status = 'outro started')}
      on:introend={() => (status = 'intro ended')}
      on:outroend={() => (status = 'outro ended')}>
      Flies in, fades out
    </p>
  {/if}
  {#if visible}
    <p in:typewriter>The quick brown fox jumps over the lazy dog</p>
  {/if}
  <label><input type="range" bind:value={i} max="10" /></label>
  {#if visible}
    {#each items.slice(0, i) as item}
      <!-- local: only plays when the immediate parent block is added or removed -->
      <div transition:slide|local>{item}</div>
    {/each}
  {/if}
</div>
