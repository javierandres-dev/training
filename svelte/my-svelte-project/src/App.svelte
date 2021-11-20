<script>
  import Context from './Context.svelte';
  import Events from './Events.svelte';
  import Promises from './Promises.svelte';
  import Loops from './Loops.svelte';
  import Conditionals from './Conditionals.svelte';
  import Hello from './Hello.svelte';
  import Reactivity from './Reactivity.svelte';

  export let name;

  import { setContext } from 'svelte';

  const email = 'test@test.test';

  setContext('aContextValue', email);
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
<hr />
<h2>Components and props</h2>
<Hello />
<hr />
<h2>Reactivity</h2>
<Reactivity />
<hr />
<h2>Conditionals</h2>
<Conditionals {name} />
<hr />
<h2>Loops</h2>
<Loops />
<hr />
<h2>Promises</h2>
<Promises />
<hr />
<h2>Events</h2>
<Events />
<hr />
<h2>Context</h2>
<Context />

<footer>learning svelte</footer>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  :global(span) {
    color: lightgray;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  footer {
    height: 64px;
    margin-top: 64px;
    text-align: center;
  }
</style>
