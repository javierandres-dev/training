<script>
  import App from './App.svelte';
  import List from './List.svelte';
  const welcome = 'Welcome';
  const aConst = 'aCosnt';
  let aVar = 'aVar ';
  const obj = {
    firstName: 'jon',
    lastName: 'smith',
  };
  const oObj = {
    phone1: '444',
    phone2: '555',
  };
</script>

<p>Hello, World!<span> form my first component </span>{welcome}</p>
<List {aConst} {aVar} {obj} {...oObj} />

<style>
  p {
    text-align: center;
    color: gray;
  }
</style>
