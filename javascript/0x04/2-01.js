(() => {
  const d = document,
    // 1.  Instance
    xhr = new XMLHttpRequest(),
    $xhr = d.getElementById("xhr"),
    $fragment = d.createDocumentFragment();
  // 2.  Events
  xhr.addEventListener("readystatechange", (e) => {
    // Here all logic
    if (xhr.readyState !== 4) return;
    //console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Success");
      //console.log(xhr.responseText);
      const json = JSON.parse(xhr.responseText);
      //console.log(json);
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerText = `${el.name} ==> ${el.email} ==> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment); // Only one insertion into DOM
    } else {
      //console.log("error");
      const message = xhr.statusText || "Fail.";
      $xhr.innerHTML = `Error, code ${xhr.status}: ${message}`;
    }
    //console.log("End.");
  });
  // 3.  End point
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  // 4.  Query
  xhr.send();
})();
