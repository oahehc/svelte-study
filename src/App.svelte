<script lang="ts">
  import Counter from "./Counter.svelte";
  import List from "./List.svelte";
  import Event from "./Event.svelte";
  import Async from "./Async.svelte";
  import EventModifier from "./EventModifier.svelte";
  import EventCustom from "./EventCustom.svelte";
  import Binding from "./Binding.svelte";
  import Form from "./Form.svelte";
  import Contenteditable from "./Contenteditable.svelte";
  import Video from "./Video.svelte";
  import BindThis from "./BindThis.svelte";
  import Lifecycle from "./Lifecycle.svelte";
  import MotionTweened from "./MotionTweened.svelte";
  import MotionSpring from "./MotionSpring.svelte";
  import Transition from "./Transition.svelte";
  import Action from "./Action.svelte";
  import Slot from "./Slot.svelte";

  let htmlTag = "<b>HTML</b>";
  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ];
  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <MotionSpring />
  <MotionTweened />
  <p>
    {@html htmlTag}
  </p>
  <Counter initCount={5} />
  <List data={cats} />
  <Async />
  <Event />
  <EventModifier />
  <EventCustom on:message={handleMessage} />
  <Binding />
  <Form />
  <Contenteditable />
  <Video />
  <BindThis />
  <Lifecycle />
  <Transition />
  <Action />
  <!-- set Slot component props `hovering` into `active` -->
  <Slot let:hovering={active}>
    <span slot="name"> P. Sherman </span>
    <span slot="address">
      42 Wallaby Way<br /> Sydney
      {#if active}
        (hovering)
      {/if}
    </span>
  </Slot>
</main>
