<script>
  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<style>
  div {
    width: 200px;
    height: 200px;
    background-color: lightblue;
    display: grid;
    align-items: center;
    margin: 0 auto;
  }
</style>

<div on:mousemove={handleMousemove}>position: {m.x} x {m.y}</div>
