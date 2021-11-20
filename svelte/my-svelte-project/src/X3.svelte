<script>
  export let number;
  $: x3 = number * 3;
</script>

<div>{number} x 3 = {x3}</div>
