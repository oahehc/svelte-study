import { writable } from 'svelte/store';

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
export const elapsed = derived(
	time,
	$time => Math.round(($time - start) / 1000)
);

// custom method for store
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
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