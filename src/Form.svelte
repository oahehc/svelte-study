<script>
  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];
  let selected;
  let answer = "";

  function handleSubmit() {
    alert(`${selected.text}: "${answer}"`);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} on:change={() => (answer = '')}>
    {#each questions as question}
      <option value={question}>{question.text}</option>
    {/each}
  </select>
  <input bind:value={answer} />
  <button disabled={!answer} type="submit"> Submit </button>
</form>
