const d = document,
  $form = d.getElementById("formulario"),
  $result = d.getElementById("resultado");
d.addEventListener("DOMContentLoaded", () => {
  $form.addEventListener("submit", search);
});
const search = (e) => {
  e.preventDefault();
  const job = d.getElementById("busqueda").value;
  if (job.length < 1) {
    showMessage("Por favor añade más información.");
    return;
  }
  queryApi(job);
};
const showMessage = (message) => {
  const flag = d.querySelector(".flag");
  if (!flag) {
    const $p = d.createElement("p");
    $p.classList.add("bg-gray-100", "p-3", "text-center", "mt-3", "flag");
    $p.textContent = message;
    $form.appendChild($p);
    setTimeout(() => {
      $p.remove();
    }, 3000);
  }
};
const queryApi = (term) => {
  const endpoint = `https://jobs.github.com/positions.json?search=${term}`;
  /*
  axios.get(endpoint).then((resp) => {
    console.log(resp);
  });
  */
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    endpoint
  )}`;
  axios.get(url).then((resp) => {
    //console.log(resp);
    const vacancies = JSON.parse(resp.data.contents);
    //console.log(vacancies);
    showJobs(vacancies);
  });
};
const showJobs = (jobs) => {
  //console.log(jobs);
  while ($result.firstChild) {
    $result.removeChild($result.firstChild);
  }
  if (jobs.length > 0) {
    $result.classList.add("grid");
    jobs.forEach((job) => {
      const { company, title, type, url } = job;
      $result.innerHTML += `
<div class="shadow bg-white p-6 rounded">
  <h2 class="text-2xl font-light mb-4">${title}</h2>
  <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
  <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
  <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
</div>
      `;
    });
  } else {
    showMessage(
      "No se encontraron vacantes para el término de búsqueda ingresado."
    );
  }
};
