const d = document,
  w = window,
  n = navigator;
export default function connectionDetect() {
  const $div = d.getElementById("boxConnectionDetect");
  const isOnLine = () => {
    const $p = d.createElement("p");
    if (n.onLine) {
      $p.textContent = "Connection established.";
      $p.classList.add("online");
      $p.classList.remove("offline");
    } else {
      $p.textContent = "Connection lost.";
      $p.classList.add("offline");
      $p.classList.remove("online");
    }
    $div.insertAdjacentElement("afterbegin", $p);
    setTimeout(() => $div.removeChild($p), 2000);
  };
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
