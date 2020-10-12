<script lang="ts">
  let promise;

  async function generateRandom() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();

        if (random > 0.3) {
          resolve(random);
        }

        const error = new Error("generate number fail");
        reject(error);
      }, 1000);
    });
  }

  function getRandomNumber() {
    promise = generateRandom();
  }
</script>

<div>
  <button on:click={getRandomNumber}>Get Number</button>
  {#await promise}
    <p>...waiting</p>
  {:then number}
    <p>The number is {number}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
