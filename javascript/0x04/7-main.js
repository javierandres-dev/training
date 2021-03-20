document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        const message = xhr.statusText || "Fail, check server (http/https)";
        el.outerHTML = `<div>Error ${xhr.status}: ${message}</div>`;
      }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader(
      "Content-type",
      "text/HTMLAllCollection; charset=utf-8"
    );
    xhr.send();
  };
  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});
