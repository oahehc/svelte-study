<script>
  let headingEl;

  export function focus() {
    headingEl.focus();
  }
</script>

<h2 id="list-heading" bind:this={headingEl} tabindex="-1">items completed</h2>

<!--
call child component method<script>
  function removeTodo(todo) {
    todosStatus.focus()
  }
</script><ExposeFocus bind:this={todosStatus} />
-->
