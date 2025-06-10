import getList, { getUnorderedList } from "./functions.js";

const d = document,
  $search = d.getElementById('search'),
  $results = d.getElementById('results'),
  $p = d.querySelector('p');

//const all = getList();
const all = getUnorderedList();
let html = ''

const getCard = (obj) => {
  const { id, name, photo, site } = obj;

  return `
    <figure id="${id}" class="card">
      <a href="${site}" target="_blank" class="card-link">
        <img src="${photo}" alt="${name}" class="card-image" />
        <figcaption class="card-text">
          ${name}
        </figcaption>
      </a>
    </figure>
  `;
}

for (const i of all) html += getCard(i)

$results.innerHTML = html

$search.input.addEventListener('input', (e) => {
  const found = []
  html = ''
  all.filter(item => {
    const lowerName = item.name.toLowerCase()
    const lowerInput = e.target.value.toLowerCase()
    if (lowerName.includes(lowerInput))  found.push(item)
  })
  if (found.length) {
    $p.innerText = ''
    for (const i of found) html += getCard(i)
    $results.innerHTML = html
  }
  else {
    $results.innerHTML = null
    $p.innerText = `The name: "${e.target.value}" is not found.`
  }
})

$search.addEventListener('submit', (e)=> e.preventDefault())