'use strict';
const w = window,
  d = document,
  $devs = d.getElementById('devs');

w.addEventListener('DOMContentLoaded', (e) => {
  showDevs();
  addEventListener();
});

const showDevs = () => {
  $devs.textContent = 'Cargando...';
  setTimeout(() => {
    let html = '';
    for (const dev of devs) {
      if (dev.activo)
        html += `<li class="active">${dev.nombre} <a href="${dev.paginaWeb}" target="_blank" rel="noopener noreferrer">Web Page</a> <a href="${dev.repositorio}" target="_blank" rel="noopener noreferrer">Repository</a></li>`;
      else html += `<li class="inactive">${dev.nombre}</li>`;
    }
    $devs.innerHTML = html;
  }, 1000);
};

const addEventListener = () => {
  console.log('works!');
  console.log($devs);
};

const repoWebPage = 'bit00me',
  repoWebSite = 'bit01website',
  devs = [
    {
      id: 1,
      nombre: 'Luis Felipe Rodriguez Quinayas',
      paginaWeb: 'https://Rodluisfelipe.github.io/bit00me',
      repositorio: 'https://github.com/Rodluisfelipe/',
      activo: true,
    },
    {
      id: 2,
      nombre: 'Marlon Antonio Gualteros Porras',
      paginaWeb: 'https://magualteros.github.io/bit00me',
      repositorio: 'https://github.com/magualteros/',
      activo: true,
    },
    {
      id: 3,
      nombre: 'Daniel Fernando Valencia Rojas',
      paginaWeb: 'https://DanielFValenciaR.github.io/bit00me',
      repositorio: 'https://github.com/DanielFValenciaR/',
      activo: true,
    },
    {
      id: 4,
      nombre: 'Janner Melissa Bonilla Garcia',
      paginaWeb: 'https://MeliiG.github.io/bit00me',
      repositorio: 'https://github.com/MeliiG/',
      activo: true,
    },
    {
      id: 5,
      nombre: 'Maria Fernanda Rosado Mosquera',
      paginaWeb: 'https://fernandalunares.github.io/bit00me',
      repositorio: 'https://github.com/fernandalunares/',
      activo: true,
    },
    {
      id: 6,
      nombre: 'Melisa Manios Cuellar',
      paginaWeb: 'https://MelisaManiosCuellar.github.io/bit00me',
      repositorio: 'https://github.com/MelisaManiosCuellar/',
      activo: true,
    },
    {
      id: 7,
      nombre: 'Óscar Giovanny Garzon leon',
      paginaWeb: null,
      repositorio: null,
      activo: false,
    },
    {
      id: 8,
      nombre: 'Leonardo De Jesus Zuluaga Coba',
      paginaWeb: null,
      repositorio: null,
      activo: false,
    },
    {
      id: 9,
      nombre: 'José Nicolas Soler Chavarro',
      paginaWeb: 'https://jnsoler12012.github.io/bit00me',
      repositorio: 'https://github.com/jnsoler12012/',
      activo: true,
    },
    {
      id: 10,
      nombre: 'Wilson Daniel Machado Toro',
      paginaWeb: 'https://WilsonMachado.github.io/bit00me',
      repositorio: 'https://github.com/WilsonMachado/',
      activo: true,
    },
    {
      id: 11,
      nombre: 'Diego Andrés Valbuena Vanegas',
      paginaWeb: 'https://diego379.github.io/bit00me',
      repositorio: 'https://github.com/diego379/',
      activo: true,
    },
    {
      id: 12,
      nombre: 'Fabian David Sanchez Deantonio',
      paginaWeb: 'https://FabianSan21.github.io/bit00me',
      repositorio: 'https://github.com/FabianSan21/',
      activo: true,
    },
    {
      id: 13,
      nombre: 'Briggith Nataly Rodríguez Alfaro',
      paginaWeb: null,
      repositorio: null,
      activo: false,
    },
    {
      id: 14,
      nombre: 'Franyerson Enrique Contreras Ramirez',
      paginaWeb: 'https://EnriqueContramirez.github.io/bit00me',
      repositorio: 'https://github.com/EnriqueContramirez/',
      activo: true,
    },
    {
      id: 15,
      nombre: 'Diego Nicolas Bravo Arias',
      paginaWeb: 'https://dnbravo04.github.io/bit00me',
      repositorio: 'https://github.com/dnbravo04/',
      activo: true,
    },
    {
      id: 16,
      nombre: 'Evelyn Vanessa Bernal Pérez',
      paginaWeb: 'https://Evy32.github.io/bit00me',
      repositorio: 'https://github.com/Evy32/',
      activo: true,
    },
    {
      id: 17,
      nombre: 'Juan Camilo Sánchez Echeverri',
      paginaWeb: 'https://Juan-Camilo-Sanchez-Echeverri.github.io/bit00me',
      repositorio: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/',
      activo: true,
    },
    {
      id: 18,
      nombre: 'Laura Valentina García Álvarez',
      paginaWeb: 'https://LauraVaGarciaA.github.io/bit00me',
      repositorio: 'https://github.com/LauraVaGarciaA/',
      activo: true,
    },
    {
      id: 19,
      nombre: 'Camilo santana',
      paginaWeb: 'https://Caslx.github.io/bit00me',
      repositorio: 'https://github.com/Caslx/',
      activo: true,
    },
    {
      id: 20,
      nombre: 'Danny Alejandro Martínez Duque',
      paginaWeb: 'https://alejo02336.github.io/bit00me',
      repositorio: 'https://github.com/alejo02336/',
      activo: true,
    },
    {
      id: 21,
      nombre: 'Estiben Fernandez Echeverri',
      paginaWeb: 'https://estiben-614.github.io/bit00me',
      repositorio: 'https://github.com/estiben-614/',
      activo: true,
    },
    {
      id: 22,
      nombre: 'Kristian Mosquera Serna',
      paginaWeb: 'https://kristiancode.github.io/bit00me',
      repositorio: 'https://github.com/kristiancode/',
      activo: true,
    },
    {
      id: 23,
      nombre: 'Andres Felipe Aponte Torres',
      paginaWeb: 'https://FelipeAponte.github.io/bit00me',
      repositorio: 'https://github.com/FelipeAponte/',
      activo: true,
    },
    {
      id: 24,
      nombre: 'Esteban Camacho Salgado',
      paginaWeb: 'https://Xtebandido.github.io/bit00me',
      repositorio: 'https://github.com/Xtebandido/',
      activo: true,
    },
    {
      id: 25,
      nombre: 'Sara Acuña Benavides',
      paginaWeb: 'https://Acuna21.github.io/bit00me',
      repositorio: 'https://github.com/Acuna21/',
      activo: true,
    },
    {
      id: 26,
      nombre: 'Andrés Felipe Díaz Sanabria',
      paginaWeb: 'https://Amii2.github.io/bit00me',
      repositorio: 'https://github.com/Amii2/',
      activo: true,
    },
    {
      id: 27,
      nombre: 'Angie Fernanda Espinosa Valle',
      paginaWeb: 'https://AngieEspinosa78.github.io/bit00me',
      repositorio: 'https://github.com/AngieEspinosa78/',
      activo: true,
    },
    {
      id: 28,
      nombre: 'Eduardo Cadavid Garcia',
      paginaWeb: 'https://ECG301997.github.io/bit00me',
      repositorio: 'https://github.com/ECG301997/',
      activo: true,
    },
    {
      id: 29,
      nombre: 'Neis Edith Rosado Mosquera',
      paginaWeb: 'https://NeisRosado.github.io/bit00me',
      repositorio: 'https://github.com/NeisRosado/',
      activo: true,
    },
    {
      id: 30,
      nombre: 'Isabela Mejia Salazar',
      paginaWeb: 'https://isamejias.github.io/bit00me',
      repositorio: 'https://github.com/isamejias/',
      activo: true,
    },
    {
      id: 31,
      nombre: 'Natalia Diaz Moreno',
      paginaWeb: 'https://NataliaDiazm.github.io/bit00me',
      repositorio: 'https://github.com/NataliaDiazm/',
      activo: true,
    },
    {
      id: 32,
      nombre: 'Leidy Laura Michelle Suesca',
      paginaWeb: null,
      repositorio: null,
      activo: false,
    },
    {
      id: 33,
      nombre: 'Kevin Alejandro Dosman Herrera',
      paginaWeb: null,
      repositorio: null,
      activo: false,
    },
    {
      id: 34,
      nombre: 'Zuly Yohady Rodriguez Mosquera',
      paginaWeb: null,
      repositorio: null,
      activo: false,
    },
    {
      id: 35,
      nombre: 'Sara Alejandra Tintin Cuervo',
      paginaWeb: null,
      repositorio: null,
      activo: false,
    },
  ];
