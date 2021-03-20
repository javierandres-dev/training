const d = document,
  $cryptocurrencies = d.getElementById("criptomonedas"),
  $coin = d.getElementById("moneda"),
  $form = d.getElementById("formulario"),
  $result = d.getElementById("resultado"),
  toQuote = {
    moneda: "",
    criptomoneda: "",
  };

window.onload = () => {
  fillSelectCryptocurrencies();
  eventListeners();
};
async function queryApi(resource) {
  try {
    const url = `https://min-api.cryptocompare.com/data/${resource}`,
      resp = await fetch(url);
    //console.log(resp);
    if (!resp.ok) throw "error";
    const data = await resp.json();
    //console.log(data);
    if (data.Response === "Error") throw `${data.Message}`;
    return data;
  } catch (err) {
    showMessage("Error al consultar la API.", "error");
    console.warn(err);
  }
}
async function fillSelectCryptocurrencies() {
  const data = await queryApi("top/mktcapfull?limit=10&tsym=USD"),
    cryptocurrencies = data.Data;
  cryptocurrencies.forEach((cryptocurrency) => {
    const { FullName, Name } = cryptocurrency.CoinInfo;
    const option = d.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    $cryptocurrencies.appendChild(option);
  });
}
const eventListeners = () => {
  $cryptocurrencies.addEventListener("change", setValue);
  $coin.addEventListener("change", setValue);
  $form.addEventListener("submit", quote);
};
const setValue = (e) => {
  toQuote[e.target.name] = e.target.value;
};
async function quote(e) {
  e.preventDefault();
  if (validateValues()) {
    const { moneda, criptomoneda } = toQuote;
    const data = await queryApi(`price?fsym=${criptomoneda}&tsyms=${moneda}`);
    for (const [key, value] of Object.entries(data)) {
      showMessage(`Valor actual: ${key}: ${value}`);
    }
  }
}
const validateValues = () => {
  const { moneda, criptomoneda } = toQuote;
  if (moneda === "" || criptomoneda === "") {
    showMessage("Todos los campos son requeridos", "error");
    return false;
  } else {
    return true;
  }
};
const showMessage = (message, type) => {
  $result.innerHTML = `
<p class=${type}>${message}</p>
  `;
  if (type === "error") {
    setTimeout(() => {
      $result.innerHTML = null;
    }, 4000);
  }
};
