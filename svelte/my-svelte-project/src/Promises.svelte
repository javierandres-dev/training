<script>
  const endpoint = 'https://jsonplaceholder.typicode.com/users';

  const getUsers = async () => {
    let res = await fetch(endpoint);
    if (res.ok) return await res.json();
    else throw new Error('occurred an error');
  };

  const promise = getUsers();
</script>

{#await promise}
  <p>wait, loading ...</p>
{:then value}
  <ul>
    {#each value as item}
      <li>{item.name}</li>
    {/each}
  </ul>
{:catch error}
  <p>{error}</p>
{/await}
