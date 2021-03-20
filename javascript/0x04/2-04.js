(() => {
  const d = document,
    $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      const json = res.data;
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerText = `${el.name} ==> ${el.email} ==> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment); // Only one insertion into DOM
    })
    .catch((err) => {
      //console.log(err.response);
      const message = err.response.statusText || "Fail.";
      $axios.innerHTML = `Error, code ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("End.");
    });
})();
