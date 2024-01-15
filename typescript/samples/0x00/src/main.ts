const d = document,
  $form = d.getElementById("mainForm") as HTMLFormElement;

$form.addEventListener("submit", addEmployee);
$form.dateBirth.addEventListener("input", () => {
  age = getAge($form.dateBirth.value);
  $form.age.value = age === 1 ? `${age} year old` : `${age} years old`;
});

let age: number;

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateBirth: Date;
  genre: string;
  phone: string;
  email: string;
  web: string;
  civilStatus: string;
  children: number;
  hasHouse: boolean;
  hasVehicle: boolean;
  weather: string;
  luchTime: Date;
  color: string;
  hobbies: string[];
}

const employees: Employee[] = [];

function addEmployee(e: Event) {
  e.preventDefault();
  /* const employee: Employee = {
    id: "e1",
    firstName: "john",
    lastName: "doe",
    dateBirth: new Date(),
    genre: "male",
    phone: "555 555 5555",
    email: "jd@test.com",
    web: "http://jd.com",
    civilStatus: "married",
    children: 1,
    hasHouse: false,
    hasVehicle: true,
    weather: "2",
    luchTime: new Date(),
    color: "#ef0606",
    hobbies: ["run", " write", " draw"],
  }; */
  const employee: Employee = {
    id: `e${employees.length + 1}`,
    firstName: $form.firstName.value,
    lastName: $form.lastName.value,
    dateBirth: $form.dateBirth.value,
    genre: $form.genre.value,
    phone: $form.phone.value,
    email: $form.email.value,
    web: $form.web.value,
    civilStatus: $form.civilStatus.value,
    children: parseInt($form.sons.value),
    hasHouse: $form.house.checked,
    hasVehicle: $form.vehicle.checked,
    weather: $form.weather.value,
    luchTime: $form.lunchTime.value,
    color: $form.color.value,
    hobbies: $form.hobbies.value.split(","),
  };
  employees.push(employee);
  $form.reset();
  renderEmployees();
}

function renderEmployees(): void {
  const $tbody = d.querySelector("tbody")!;
  console.log(employees);
  let html = "";
  employees.forEach((employee) => {
    const ageEe = getAge(employee.dateBirth);
    html += `
    <tr>
      <td>${employee.firstName} ${employee.lastName}</td>
      <td>${ageEe === 1 ? `${ageEe} year old` : `${ageEe} years old`}</td>
      <td>${employee.genre}</td>
      <td>${employee.phone}</td>
      <td>${employee.email}</td>
      <td>${employee.web}</td>
      <td>${employee.civilStatus}</td>
      <td>${employee.children}</td>
      <td>${employee.hasHouse ? "yes" : "no"}</td>
      <td>${employee.hasVehicle ? "yes" : "no"}</td>
      <td>${employee.weather}</td>
      <td>${employee.luchTime}</td>
      <td class="color-field" style="background-color: ${employee.color}"></td>
      <td>${employee.hobbies}</td>
    </tr>
    `;
  });
  $tbody.innerHTML = html;
}

const getAge = (dateBirth: Date): number => {
  const today = new Date();
  const birthDate = new Date(dateBirth);
  const yearsDifference = today.getFullYear() - birthDate.getFullYear();
  const isBeforeBirthday =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate());

  return isBeforeBirthday ? yearsDifference - 1 : yearsDifference;
};
