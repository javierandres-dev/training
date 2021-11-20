<script>
  import { getContext } from 'svelte';

  const aValue = getContext('aContextValue');
</script>

<p>value from context: {aValue}</p>
