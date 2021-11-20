<script>
  let number = 0;
  const increment = () => number++;

  const handleSubmit = (e) => {
    console.log('works!');
  };

  const getValue = (e) => console.log('value: ', e.target.value);
</script>

<div>{number}</div>

<button on:click|once={increment}>+</button>
<button on:click={increment}>+</button>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" on:input={(e) => getValue(e)} />
  <button type="submit">send</button>
</form>
