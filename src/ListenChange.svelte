<script>
  let count = 0
  
  const incrementCount = () => {
    count = count + 1
  }
  
  $: console.log(`${count}`)

  $: {
    console.log(`the count is ${count}`)
    console.log(`double the count is ${count * 2}`)
  }
  </script>
  
  {count} <button on:click={incrementCount}>+1</button>