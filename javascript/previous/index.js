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
        html += `<li class="active">${dev.nombre} <a href="${dev.paginaWeb}" target="_blank" rel="noopener noreferrer">Web Page</a> <a href="${dev.repositorio}" target="_blank" rel="noopener noreferrer">Repository</a> <a href="${dev.entregable1}" target="_blank" rel="noopener noreferrer">Deliverable 1</a></li>`;
      else html += `<li class="inactive">${dev.nombre}</li>`;
    }
    $devs.innerHTML = html;
  }, 1000);
};

const addEventListener = () => {
  console.log('works!');
  console.log($devs);
};

const webPage = 'bit00me',
  webSite = 'bit01website',
  devs = [
    {
      id: 1,
      nombre: 'Luis Felipe Rodriguez Quinayas',
      repositorio: 'https://github.com/Rodluisfelipe/',
      paginaWeb: `https://Rodluisfelipe.github.io/${webPage}`,
      entregable1: `https://Rodluisfelipe.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 2,
      nombre: 'Marlon Antonio Gualteros Porras',
      repositorio: 'https://github.com/magualteros/',
      paginaWeb: `https://magualteros.github.io/${webPage}`,
      entregable1: `https://magualteros.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 3,
      nombre: 'Daniel Fernando Valencia Rojas',
      repositorio: 'https://github.com/DanielFValenciaR/',
      paginaWeb: `https://DanielFValenciaR.github.io/${webPage}`,
      entregable1: `https://DanielFValenciaR.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 4,
      nombre: 'Janner Melissa Bonilla Garcia',
      repositorio: 'https://github.com/MeliiG/',
      paginaWeb: `https://MeliiG.github.io/${webPage}`,
      entregable1: `https://MeliiG.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 5,
      nombre: 'Maria Fernanda Rosado Mosquera',
      repositorio: 'https://github.com/fernandalunares/',
      paginaWeb: `https://fernandalunares.github.io/${webPage}`,
      entregable1: `https://fernandalunares.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 6,
      nombre: 'Melisa Manios Cuellar',
      repositorio: 'https://github.com/MelisaManiosCuellar/',
      paginaWeb: `https://MelisaManiosCuellar.github.io/${webPage}`,
      entregable1: `https://MelisaManiosCuellar.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 7,
      nombre: 'Óscar Giovanny Garzon leon',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      activo: false,
    },
    {
      id: 8,
      nombre: 'Leonardo De Jesus Zuluaga Coba',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      activo: false,
    },
    {
      id: 9,
      nombre: 'José Nicolas Soler Chavarro',
      repositorio: 'https://github.com/jnsoler12012/',
      paginaWeb: `https://jnsoler12012.github.io/${webPage}`,
      entregable1: `https://jnsoler12012.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 10,
      nombre: 'Wilson Daniel Machado Toro',
      repositorio: 'https://github.com/WilsonMachado/',
      paginaWeb: `https://WilsonMachado.github.io/${webPage}`,
      entregable1: `https://WilsonMachado.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 11,
      nombre: 'Diego Andrés Valbuena Vanegas',
      repositorio: 'https://github.com/diego379/',
      paginaWeb: `https://diego379.github.io/${webPage}`,
      entregable1: `https://diego379.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 12,
      nombre: 'Fabian David Sanchez Deantonio',
      repositorio: 'https://github.com/FabianSan21/',
      paginaWeb: `https://FabianSan21.github.io/${webPage}`,
      entregable1: `https://FabianSan21.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 13,
      nombre: 'Briggith Nataly Rodríguez Alfaro',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      activo: false,
    },
    {
      id: 14,
      nombre: 'Franyerson Enrique Contreras Ramirez',
      repositorio: 'https://github.com/EnriqueContramirez/',
      paginaWeb: `https://EnriqueContramirez.github.io/${webPage}`,
      entregable1: `https://EnriqueContramirez.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 15,
      nombre: 'Diego Nicolas Bravo Arias',
      repositorio: 'https://github.com/dnbravo04/',
      paginaWeb: `https://dnbravo04.github.io/${webPage}`,
      entregable1: `https://dnbravo04.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 16,
      nombre: 'Evelyn Vanessa Bernal Pérez',
      repositorio: 'https://github.com/Evy32/',
      paginaWeb: `https://Evy32.github.io/${webPage}`,
      entregable1: `https://Evy32.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 17,
      nombre: 'Juan Camilo Sánchez Echeverri',
      repositorio: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/',
      paginaWeb: `https://Juan-Camilo-Sanchez-Echeverri.github.io/${webPage}`,
      entregable1: `https://Juan-Camilo-Sanchez-Echeverri.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 18,
      nombre: 'Laura Valentina García Álvarez',
      repositorio: 'https://github.com/LauraVaGarciaA/',
      paginaWeb: `https://LauraVaGarciaA.github.io/${webPage}`,
      entregable1: `https://LauraVaGarciaA.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 19,
      nombre: 'Camilo santana',
      repositorio: 'https://github.com/Caslx/',
      paginaWeb: `https://Caslx.github.io/${webPage}`,
      entregable1: `https://Caslx.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 20,
      nombre: 'Danny Alejandro Martínez Duque',
      repositorio: 'https://github.com/alejo02336/',
      paginaWeb: `https://alejo02336.github.io/${webPage}`,
      entregable1: `https://alejo02336.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 21,
      nombre: 'Estiben Fernandez Echeverri',
      repositorio: 'https://github.com/estiben-614/',
      paginaWeb: `https://estiben-614.github.io/${webPage}`,
      entregable1: `https://estiben-614.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 22,
      nombre: 'Kristian Mosquera Serna',
      repositorio: 'https://github.com/kristiancode/',
      paginaWeb: `https://kristiancode.github.io/${webPage}`,
      entregable1: `https://kristiancode.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 23,
      nombre: 'Andres Felipe Aponte Torres',
      repositorio: 'https://github.com/FelipeAponte/',
      paginaWeb: `https://FelipeAponte.github.io/${webPage}`,
      entregable1: `https://FelipeAponte.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 24,
      nombre: 'Esteban Camacho Salgado',
      repositorio: 'https://github.com/Xtebandido/',
      paginaWeb: `https://Xtebandido.github.io/${webPage}`,
      entregable1: `https://Xtebandido.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 25,
      nombre: 'Sara Acuña Benavides',
      repositorio: 'https://github.com/Acuna21/',
      paginaWeb: `https://Acuna21.github.io/${webPage}`,
      entregable1: `https://Acuna21.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 26,
      nombre: 'Andrés Felipe Díaz Sanabria',
      repositorio: 'https://github.com/Amii2/',
      paginaWeb: `https://Amii2.github.io/${webPage}`,
      entregable1: `https://Amii2.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 27,
      nombre: 'Angie Fernanda Espinosa Valle',
      repositorio: 'https://github.com/AngieEspinosa78/',
      paginaWeb: `https://AngieEspinosa78.github.io/${webPage}`,
      entregable1: `https://AngieEspinosa78.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 28,
      nombre: 'Eduardo Cadavid Garcia',
      repositorio: 'https://github.com/ECG301997/',
      paginaWeb: `https://ECG301997.github.io/${webPage}`,
      entregable1: `https://ECG301997.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 29,
      nombre: 'Neis Edith Rosado Mosquera',
      repositorio: 'https://github.com/NeisRosado/',
      paginaWeb: `https://NeisRosado.github.io/${webPage}`,
      entregable1: `https://NeisRosado.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 30,
      nombre: 'Isabela Mejia Salazar',
      repositorio: 'https://github.com/isamejias/',
      paginaWeb: `https://isamejias.github.io/${webPage}`,
      entregable1: `https://isamejias.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 31,
      nombre: 'Natalia Diaz Moreno',
      repositorio: 'https://github.com/NataliaDiazm/',
      paginaWeb: `https://NataliaDiazm.github.io/${webPage}`,
      entregable1: `https://NataliaDiazm.github.io/${webSite}`,
      activo: true,
    },
    {
      id: 32,
      nombre: 'Leidy Laura Michelle Suesca',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      activo: false,
    },
    {
      id: 33,
      nombre: 'Kevin Alejandro Dosman Herrera',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      activo: false,
    },
    {
      id: 34,
      nombre: 'Zuly Yohady Rodriguez Mosquera',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      activo: false,
    },
    {
      id: 35,
      nombre: 'Sara Alejandra Tintin Cuervo',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      activo: false,
    },
  ];
