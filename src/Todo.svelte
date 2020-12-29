<script>
  function selectOnFocus(node) {
    if (node && typeof node.select === "function") {
      // make sure node is defined and has a select() method
      const onFocus = (event) => node.select(); // event handler
      node.addEventListener("focus", onFocus); // when node gets focus call onFocus()
      return {
        destroy: () => node.removeEventListener("focus", onFocus), // this will be executed when the node is removed from the DOM
      };
    }
  }

  const focusOnInit = (node) =>
    node && typeof node.focus === "function" && node.focus();
</script>

<!-- 
run selectOnFocus/focusOnInit, passing the DOM node of the <input> as a parameter, as soon as the component is mounted on the DOM. It will also be in charge of executing the destroy function when the component is removed from DOM. So, with the use directive, Svelte takes care of the component's lifecycle for us. 
-->
<input use:selectOnFocus use:focusOnInit />
