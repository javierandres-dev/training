const d = document,
  $main = d.getElementById('root');

d.addEventListener('DOMContentLoaded', () => {
  const $p = d.createElement('p'),
    $btn = d.createElement('button');

  let clicks = 0

  $p.textContent = clicks
  $btn.textContent = 'Click me'
  
  $main.appendChild($p)
  $main.appendChild($btn)

  $btn.addEventListener('click', () => {
    clicks += 1
    $p.textContent = clicks
  })
})