const d = document,
  w = window;
export default function videoAndMap(id, mediaQuery) {
  const $boxRandR = d.getElementById(id);
  const breakpoint = w.matchMedia(mediaQuery);
  const showContent = (e) => {
    if (e.matches) {
      $boxRandR.innerHTML = `
      <iframe width="426" height="240" src="https://www.youtube.com/embed/16geDhp5Xmg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11181.0701022731!2d-122.68935341347378!3d45.524821763984846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a024e0c754d%3A0x439c5ef39ec913a1!2sMozilla!5e0!3m2!1sen!2sco!4v1601659429864!5m2!1sen!2sco" width="426" height="240" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      `;
    } else {
      $boxRandR.innerHTML = `
      <p><a href="https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90" target="_blank" rel="noreferrer">View video</a></p>
      <p><a href="https://goo.gl/maps/wKrTXhgRdWNj8wWy8" target="_blank" rel="noreferrer">View Map</a></p>
      `;
    }
  };
  breakpoint.addListener(showContent);
  showContent(breakpoint);
}
