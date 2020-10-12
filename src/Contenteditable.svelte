<script>
  let html = "<p>Write some text!</p>";
</script>

<style>
  [contenteditable] {
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>

<div contenteditable="true" bind:innerHTML={html} />
<pre>{html}</pre>
