/**
 * VARIABLES
 */
const btnGetUsers = document.getElementById('btnGetUsers');
const btnGetUser = document.getElementById('btnGetUser');
const btnPostUser = document.getElementById('btnPostUser');
const showResponses = document.getElementById('showResponses');
const showMessages = document.getElementById('showMessages');
/**
 * EVENTOS
 */
function eventListeners() {
    btnGetUsers.addEventListener('click', getUsers);
    btnGetUser.addEventListener('click', askOi);
    btnPostUser.addEventListener('click', createUser);
}
eventListeners();
/**
 * FUNCIONES
 */
function sendMessage(message, style) {
    showMessages.innerHTML = message;
    showMessages.classList = style;
    setTimeout(function () {
        showMessages.innerHTML = '';
    }, 4000);
}

function getUsers() {
    const url = 'http://localhost:4000/users';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            let content = '';
            response.forEach(function (user) {
                content += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>IDENTIFICACIÓN OFICIAL: ${user.oi}</li>
                    <li>NOMBRE: ${user.name}</li>
                    <li>CORREO ELECTRÓNICO: ${user.email}</li>
                    <li>TELÉFONO: ${user.phone}</li>
                </ul>
                `;
            });
            showResponses.innerHTML = content;
        } else {
            sendMessage('Solicitud no procesada.', 'bg-danger text-white')
        }
    }
    xhr.send();
}

function askOi() {
    document.getElementById('askOi').classList.remove('d-none');
    const btnSendOi = document.getElementById('btnSendOi');
    btnSendOi.addEventListener('click', getUser);
}

function getUser() {
    const oi = document.getElementById('oi').value;
    const url = 'http://localhost:4000/users/' + oi;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            let content = `
                <ul>
                    <li>ID: ${response.id}</li>
                    <li>IDENTIFICACIÓN OFICIAL: ${response.oi}</li>
                    <li>NOMBRE: ${response.name}</li>
                    <li>CORREO ELECTRÓNICO: ${response.email}</li>
                    <li>TELÉFONO: ${response.phone}</li>
                </ul>
                `;
            showResponses.innerHTML = content;
        } else {
            sendMessage('Usuario no encontrado.', 'bg-warning');
        }
    }
    xhr.send();
}

function createUser(){
    document.getElementById('askData').classList.remove('d-none');
    const btnSendData = document.getElementById('btnSendData');
    btnSendData.addEventListener('click', function(evt){
        evt.preventDefault();
        console.log('Works!');
    });
}