(() => {
  const d = document,
    $axiosAsync = d.getElementById("axios-async"),
    $fragment = d.createDocumentFragment();
  async function getData() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
      //console.log(json);
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerText = `${el.name} ==> ${el.email} ==> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment); // Only one insertion into DOM
    } catch (err) {
      //console.log(err.response);
      const message = err.response.statusText || "Fail.";
      $axiosAsync.innerHTML = `Error, code ${err.response.status}: ${message}`;
    } finally {
      //console.log("End.");
    }
  }
  getData();
})();
