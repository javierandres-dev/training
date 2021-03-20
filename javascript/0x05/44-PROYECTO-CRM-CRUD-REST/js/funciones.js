// Show messages on user interface
export function showMessage(message) {
  const flag = document.querySelector(".flag");
  if (!flag) {
    const $p = document.createElement("p");
    $p.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center",
      "flag"
    );
    $p.innerHTML = `
<strong class="font-bold">Error!</strong>
<span class="block sm:inline">${message}</span>
    `;
    const $form = document.getElementById("formulario");
    $form.appendChild($p);
    setTimeout(() => {
      $p.remove();
    }, 3000);
  }
}
// Return true if all fields exist, otherwise return false
export function isValid(obj) {
  return !Object.values(obj).every((input) => input !== "");
}
