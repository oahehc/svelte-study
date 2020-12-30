<script lang="ts">
  import { TodoType } from "./types";
  export let todos;

  // fix: "implicitly has an 'any' type"
  // https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error
  let completeTodos: number;
  $: completedTodos = todos.filter((t: TodoType) => t.completed).length;
</script>
