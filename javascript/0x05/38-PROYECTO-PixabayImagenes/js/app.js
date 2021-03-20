const w = window,
  d = document,
  $form = d.getElementById("formulario"),
  $term = d.getElementById("termino"),
  $result = d.getElementById("resultado"),
  $pagination = d.getElementById("paginacion"),
  perPage = 8;
let flag = 0,
  totalPages,
  nPage,
  page = 1;
// when the document already loaded
w.onload = () => {
  eventListeners();
};
// listen to events
const eventListeners = () => {
  $form.addEventListener("submit", searchImages);
};
// first, check the form, then query the API
const searchImages = (e) => {
  e.preventDefault();
  if (validateForm()) {
    queryApi();
  }
};
// check the form field
const validateForm = () => ($term.value.length === 0 ? showMessage() : true);
// inform the user
const showMessage = () => {
  if (flag === 0) {
    flag++;
    const p = d.createElement("p");
    p.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    p.textContent = "Falta el término de búsqueda.";
    $result.appendChild(p);
    setTimeout(() => {
      p.remove();
      flag--;
    }, 3000);
  }
};
// query the API
const queryApi = () => {
  fetch(
    `https://pixabay.com/api/?key=19173307-d39e35bc1791cf098dddcca4f&q=${$term.value}&per_page=${perPage}&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      // set amount pages
      totalPages = calculatePages(data.totalHits);
      showImages(data.hits);
    });
};
// determinate how many pages exist
const calculatePages = (total) => {
  return parseInt(Math.ceil(total / perPage));
};
// show the user the images
const showImages = (images) => {
  // clear previous images
  while ($result.firstChild) {
    $result.removeChild($result.firstChild);
  }
  images.forEach((image) => {
    const { previewURL, largeImageURL, tags, type } = image;
    $result.innerHTML += `
      <div class="w-1/2 md:w-1/3 lg:w1/4 p-3 mb-4">
        <figure class="bg-white">
          <img class="w-full" src="${previewURL}" alt="${type} ${
      tags.split(",")[0]
    }">
          <figcaption class="p-2 font-light text-center">${tags}</figcaption>
        </figure>
        <a href="${largeImageURL}" target="_blank", rel="noopene noreferrer">
        <p class="bg-blue-800 hover:bg-blue-500 text-white font-bold text-center rounded p-1">Ver imagen</p></a>
      </div>
    `;
  });
  // clear previous pagination
  while ($pagination.firstChild) {
    $pagination.removeChild($pagination.firstChild);
  }
  showPagination();
};
// show the user access to pagination
const showPagination = () => {
  // set each page number
  nPage = pagination(totalPages);
  while (true) {
    const { value, done } = nPage.next();
    if (done) return;
    const a = d.createElement("a");
    a.href = "#";
    a.dataset.page = value;
    a.textContent = value;
    a.classList.add(
      "bg-yellow-400",
      "px-4",
      "py-1",
      "mr-2",
      "font-bold",
      "mb-4",
      "rounded",
      "mx-auto"
    );
    a.onclick = () => {
      page = value;
      queryApi();
    };
    $pagination.appendChild(a);
  }
};
// generator => register amount of elements according to the number  of pages
function* pagination(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}
