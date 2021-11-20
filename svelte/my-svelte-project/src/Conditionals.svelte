<script>
  export let name;
</script>

{#if name === 'world'}
  <p>name is world</p>
{:else}
  <p>name isn't world</p>
{/if}
