<script>
  export let aConst;
  export let aVar;
  export let obj;
  export let phone1, phone2;
</script>

<ul>
  <li>item</li>
  <li>content aConst: {aConst}</li>
  <li>content aVar: {aVar}</li>
  <ol>
    <li>{obj.firstName}</li>
    <li>{(obj.lastName = 'gates')}</li>
  </ol>
  <ol>
    <li>{phone1}</li>
    <li>{(phone2 = '222')}</li>
  </ol>
</ul>
