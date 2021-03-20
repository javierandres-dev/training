(() => {
  const d = document,
    $fetch = d.getElementById("fetch"),
    $fragment = d.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      // Here all logic
      //console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerText = `${el.name} ==> ${el.email} ==> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment); // Only one insertion into DOM
    })
    .catch((err) => {
      //console.log(err);
      const message = err.statusText || "Fail.";
      $fetch.innerHTML = `Error, code ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("End.");
    });
})();
