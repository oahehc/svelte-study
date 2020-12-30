import { writable } from "svelte/store";

export const count = writable(0);

// The start function is called when the store gets its first subscriber; stop is called when the last subscriber unsubscribes.
export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

// compute the value from other store
const start = new Date();
export const elapsed = derived(time, ($time) =>
  Math.round(($time - start) / 1000)
);

// custom method for store
function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
    reset: () => set(0),
  };
}
export const count2 = createCount();

/**
 * Read and write data in the component
	import { count } from './stores.js';

	function reset() {
		count.set(0);
	}
	function increment() {
		count.update(n => n + 1);
  }
  function decrement() {
		count.update(n => n - 1);
  }
  
 * subscribe and unsubscribe
	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});
  onDestroy(unsubscribe);
  
 * Auto-subscription when prefix with `$`
  <h1>The count is {$count}</h1>

 * bind with writable store (has a `set` method)
  <input bind:value={$name}>
 */

/** implement store from scratch
export const writable = (initial_value = 0) => {

  let value = initial_value         // content of the store
  let subs = []                     // subscriber's handlers

  const subscribe = (handler) => {
    subs = [...subs, handler]                                 // add handler to the array of subscribers
    handler(value)                                            // call handler with current value
    return () => subs = subs.filter(sub => sub !== handler)   // return unsubscribe function
  }

  const set = (new_value) => {
    if (value === new_value) return         // same value, exit
    value = new_value                       // update value
    subs.forEach(sub => sub(value))         // update subscribers
  }

  const update = (update_fn) => set(update_fn(value))   // update function

  return { subscribe, set, update }       // store contract
}
*/

/** bind with localStorage
import { writable } from 'svelte/store'

import type { JsonValue } from './types/json.type'

export const localStore = (key: string, initial: JsonValue) => {          // receives the key of the local storage and an initial value

  const toString = (value: JsonValue) => JSON.stringify(value, null, 2)   // helper function
  const toObj = JSON.parse                                                // helper function

  if (localStorage.getItem(key) === null) {                               // item not present in local storage
    localStorage.setItem(key, toString(initial))                          // initialize local storage with initial value
  }

  const saved = toObj(localStorage.getItem(key))                          // convert to object

  const { subscribe, set, update } = writable(saved)                      // create the underlying writable store

  return {
    subscribe,
    set: (value: JsonValue) => {
      localStorage.setItem(key, toString(value))                          // save also to local storage as a string
      return set(value)
    },
    update
  }
}
*/
