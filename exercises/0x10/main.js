/**
 * VARIABLES
 */
const btnGetUsers = document.getElementById('btnGetUsers');
const btnGetUser = document.getElementById('btnGetUser');
const btnPostUser = document.getElementById('btnPostUser');
const btnPutUser = document.getElementById('btnPutUser');
const btnDeleteUser = document.getElementById('btnDeleteUser');
const showResponses = document.getElementById('showResponses');
const showMessages = document.getElementById('showMessages');
/**
 * EVENTS
 */
function eventListeners() {
    btnGetUsers.addEventListener('click', getUsers);
    btnGetUser.addEventListener('click', getUser);
    btnPostUser.addEventListener('click', createUser);
    btnPutUser.addEventListener('click', editUser);
    btnDeleteUser.addEventListener('click', deleteUser);
}
eventListeners();
/**
 * FUNCTIONS
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

function getUser() {
    document.getElementById('askUserId').classList.remove('d-none');
    const btnSendUserId = document.getElementById('btnSendUserId');
    btnSendUserId.innerHTML = 'Leer usuario';
    btnSendUserId.addEventListener('click', function () {
        const userId = document.getElementById('userId').value;
        const url = 'http://localhost:4000/users/' + userId;
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
    });
}

function createUser() {
    document.getElementById('askUserData').classList.remove('d-none');
    const btnSendUserData = document.getElementById('btnSendUserData');
    btnSendUserData.innerHTML = 'Crear usuario';
    btnSendUserData.addEventListener('click', function (evt) {
        evt.preventDefault();
        const nOi = document.getElementById('nOi').value;
        const nName = document.getElementById('nName').value;
        const nEmail = document.getElementById('nEmail').value;
        const nPhone = document.getElementById('nPhone').value;
        const nUser = {
            'oi': nOi,
            'name': nName,
            'email': nEmail,
            'phone': nPhone
        };
        const url = 'http://localhost:4000/users';
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //console.log(this.responseText);
                sendMessage('Nuevo usuario creado con éxito.', 'bg-success');
            }
        }
        xhr.send(JSON.stringify(nUser));
    });
}

function editUser() {
    document.getElementById('askUserId').classList.remove('d-none');
    document.getElementById('btnSendUserId').classList.add('d-none');
    document.getElementById('askUserData').classList.remove('d-none');
    const btnSendUserData = document.getElementById('btnSendUserData');
    btnSendUserData.innerHTML = 'Editar usuario';
    btnSendUserData.addEventListener('click', function (evt) {
        evt.preventDefault();
        const userId = document.getElementById('userId').value;
        const nOi = document.getElementById('nOi').value;
        const nName = document.getElementById('nName').value;
        const nEmail = document.getElementById('nEmail').value;
        const nPhone = document.getElementById('nPhone').value;
        const nUser = {
            'oi': nOi,
            'name': nName,
            'email': nEmail,
            'phone': nPhone
        };
        const url = 'http://localhost:4000/users/' + userId;
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', url, true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                sendMessage('Usuario editado con éxito.', 'bg-success');
            }
        }
        xhr.send(JSON.stringify(nUser));
    });
}

function deleteUser() {
    document.getElementById('askUserId').classList.remove('d-none');
    const btnSendUserId = document.getElementById('btnSendUserId');
    btnSendUserId.innerHTML = 'Eliminar usuario'
    btnSendUserId.addEventListener('click', function () {
        const userId = document.getElementById('userId').value;
        const url = 'http://localhost:4000/users/' + userId;
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', url, true);
        xhr.onload = function () {
            if (this.status === 200) {
                console.log(this.responseText);
            } else {
                showMessages('Error.', 'bg-alert');
            }
        }
        xhr.send();
    })
}