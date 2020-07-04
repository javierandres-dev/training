const readEmail = document.getElementById('readEmail')
const readPassword = document.getElementById('readPassword')
const readWorkouts = document.getElementById('readWorkouts')
const readPhone = document.getElementById('readPhone')
const readSource = document.getElementById('readSource')
const btnSignUp = document.getElementById('btnSignUp')
const user = {}
btnSignUp.addEventListener('click', (evt) => {
    evt.preventDefault();
    let email = readEmail.value
    let password = readPassword.value
    let workouts = readWorkouts.value
    let phone = readPhone.value
    let source = readSource.value
    user['email'] = email
    user['password'] = password
    user['workouts'] = workouts
    user['phone'] = phone
    user['source'] = source
    console.log(user)
})