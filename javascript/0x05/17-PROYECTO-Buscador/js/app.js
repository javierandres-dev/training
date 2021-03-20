/**
 * VARIABLES
 */
const d = document,
  $result = d.getElementById("resultado"),
  $year = d.getElementById("year"),
  current = new Date().getFullYear(),
  oldest = current - 10,
  $brand = d.getElementById("marca"),
  $min = d.getElementById("minimo"),
  $max = d.getElementById("maximo"),
  $doors = d.getElementById("puertas"),
  $transmission = d.getElementById("transmision"),
  $color = d.getElementById("color");
// generate an object with the search
const dataOfSearch = {
  brand: "",
  year: "",
  min: "",
  max: "",
  doors: "",
  transmission: "",
  color: "",
};
/**
 * LISTENERS
 */
// when the document already loaded
d.addEventListener("DOMContentLoaded", (e) => {
  // show a list of all cars available
  showCars();
  // year option
  fillYearSelect();
  //
  $brand.addEventListener("change", (e) => {
    dataOfSearch.brand = e.target.value;
    filterCars();
  });
  $year.addEventListener("change", (e) => {
    dataOfSearch.year = parseInt(e.target.value);
    filterCars();
  });
  $min.addEventListener("change", (e) => {
    dataOfSearch.min = e.target.value;
    filterCars();
  });
  $max.addEventListener("change", (e) => {
    dataOfSearch.max = e.target.value;
    filterCars();
  });
  $doors.addEventListener("change", (e) => {
    dataOfSearch.doors = parseInt(e.target.value);
    filterCars();
  });
  $transmission.addEventListener("change", (e) => {
    dataOfSearch.transmission = e.target.value;
    filterCars();
  });
  $color.addEventListener("change", (e) => {
    dataOfSearch.color = e.target.value;
    filterCars();
  });
});
/**
 * FUNCTIONS
 */
// filter cars according to selections
const filterCars = () => {
  //console.log(dataOfSearch);
  const resp = autos
    .filter(brandFilter)
    .filter(yearFilter)
    .filter(minPriceFilter)
    .filter(maxPriceFilter)
    .filter(doorsFilter)
    .filter(transmissionFilter)
    .filter(colorFilter);
  //console.log(resp);
  showCars(resp);
};
// filter by brand
const brandFilter = (car) => {
  const { brand } = dataOfSearch;
  if (brand) {
    // found
    return car.marca === brand;
  }
  // all
  return car;
};
// filter by year
const yearFilter = (car) => {
  const { year } = dataOfSearch;
  if (year) {
    // found
    return car.year === year;
  }
  // all
  return car;
};
// filter by minimum price
const minPriceFilter = (car) => {
  const { min } = dataOfSearch;
  if (min) {
    // found
    return car.precio >= min;
  }
  // all
  return car;
};
// filter by maximum price
const maxPriceFilter = (car) => {
  const { max } = dataOfSearch;
  if (max) {
    // found
    return car.precio <= max;
  }
  // all
  return car;
};
// filter by number of doors
const doorsFilter = (car) => {
  const { doors } = dataOfSearch;
  if (doors) {
    // found
    return car.puertas === doors;
  }
  // all
  return car;
};
// filter by type of transmission
const transmissionFilter = (car) => {
  const { transmission } = dataOfSearch;
  if (transmission) {
    // found
    return car.transmision === transmission;
  }
  // all
  return car;
};
// filter by color
const colorFilter = (car) => {
  const { color } = dataOfSearch;
  if (color) {
    // found
    return car.color === color;
  }
  // all
  return car;
};
// fill in the year options
const fillYearSelect = () => {
  //console.log(current, oldest);
  // newst to oldest
  for (let year = current; year >= oldest; year--) {
    const option = d.createElement("option");
    option.value = year;
    option.textContent = year;
    $year.appendChild(option);
  }
};
const cleanHTML = () => {
  while ($result.firstChild) {
    $result.removeChild($result.firstChild);
  }
};
// create a table to show a list of all cars
const showCars = (cars = autos) => {
  //console.log(autos);
  cleanHTML();
  if (cars.length === 0) {
    $result.innerHTML = `
      <p class="error alerta">No tenemos autos que cumplan con todos los criterios de busqueda seleccionados.</p>
    `;
  } else {
    const table = d.createElement("table"),
      caption = d.createElement("caption"),
      thead = d.createElement("thead"),
      tbody = d.createElement("tbody"),
      tfoot = d.createElement("tfoot");
    let tr = d.createElement("tr"),
      td = d.createElement("td");
    caption.innerText = "autos disponibles";
    table.appendChild(caption);
    table.appendChild(thead);
    thead.appendChild(tr);
    // get all key to use as title
    const titles = Object.keys(autos[0]);
    //console.log(titles);
    for (title of titles) {
      const th = d.createElement("th");
      th.innerText = title;
      tr.appendChild(th);
    }
    table.appendChild(tbody);
    // get all values of each car
    cars.forEach((car) => {
      // destructuring technic
      const { marca, modelo, year, precio, puertas, color, transmision } = car;
      tr = d.createElement("tr");
      td = d.createElement("td");
      td.innerText = `${marca}`;
      tr.appendChild(td);
      td = d.createElement("td");
      td.innerText = `${modelo}`;
      tr.appendChild(td);
      td = d.createElement("td");
      td.innerText = `${year}`;
      tr.appendChild(td);
      td = d.createElement("td");
      td.innerText = `${precio}`;
      tr.appendChild(td);
      td = d.createElement("td");
      td.innerText = `${puertas}`;
      tr.appendChild(td);
      td = d.createElement("td");
      td.innerText = `${color}`;
      tr.appendChild(td);
      td = d.createElement("td");
      td.innerText = `${transmision}`;
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
    table.appendChild(tfoot);
    tr = d.createElement("tr");
    td = d.createElement("td");
    td.innerText = `${cars.length} de ${autos.length}.`;
    tr.appendChild(td);
    tfoot.appendChild(tr);
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    $result.appendChild(table);
  }
};
