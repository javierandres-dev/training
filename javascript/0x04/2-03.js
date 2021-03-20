(() => {
  const d = document,
    $fetchAsync = d.getElementById("fetch-async"),
    $fragment = d.createDocumentFragment();
  async function getData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      json = await res.json();
      //console.log(res, json);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerText = `${el.name} ==> ${el.email} ==> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment); // Only one insertion into DOM
    } catch (err) {
      //console.log(err);
      const message = err.statusText || "Fail.";
      $fetchAsync.innerHTML = `Error, code ${err.status}: ${message}`;
    } finally {
      //console.log("End.");
    }
  }
  getData();
})();
