<script>
  import X3 from './X3.svelte';

  let number = 0;
  const increment = () => number++;
  const decrement = () => number--;
  $: x2 = number * 2;
</script>

<button on:click={increment}>+</button>
<div>{number}</div>
<button on:click={decrement}>-</button>
<div>{number} x2 = {x2}</div>
<X3 {number} />
