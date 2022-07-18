// const form = document.querySelector('form');
// let userName = document.querySelector('#userName');
// let okButton = document.querySelector('#button');
// let clearButton = document.querySelector('#clear');
// let nom = document.querySelector('.monsieur');
// let userAge = document.getElementById('userAge');

// okButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     const user = {
//         nom: userName.value,
//         age: userAge.value
//     }
//     localStorage.setItem("user", JSON.stringify(user));
//     console.log(userName.value);
//     form.reset();
//     document.location.reload();
// })

// const localStorageItem = JSON.parse(localStorage.getItem("user"));

// if (userName !== "" || userAge !== "") {
//     if (localStorageItem !== null) {
//         nom.textContent = `${localStorageItem.nom} Tu as ${localStorageItem.age} ans`;
//     }
// }
// clearButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     localStorage.removeItem("user");
//     document.location.reload();
// })

// okButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     localStorage.setItem("user", userName.value);
//     // localStorage.setItem("user", userAge.value);
//     document.location.reload();
// })

// if (localStorage.getItem("user") !== null) {
//     nom.textContent = localStorage.getItem("user");
// }

// clearButton.addEventListener('click', () => {
//     localStorage.removeItem('user');
//     document.location.reload();
// })

const form = document.querySelector('form');
let nom = document.querySelector('#name');
let okButton = document.querySelector('button');
let userName = document.getElementById('nom');
let deleteButton = document.getElementById('delete');
let age = document.querySelector('#age');
let formulaire = document.querySelector('.formulaire');

function resetForm() {
    form.reset();
}

okButton.addEventListener('click', function(e) {
    e.preventDefault();
    const user = {
        nom: nom.value,
        age: age.value
    }

    localStorage.setItem('nom', JSON.stringify(user));
    resetForm();

})

let local = JSON.parse(localStorage.getItem('nom'));

if (local != null) {
    userName.textContent = `${local.nom}, tu as ${local.age}`;
    resetForm();
}

deleteButton.addEventListener('click', deleteStorage);

function deleteStorage(event) {
    event.preventDefault();
    localStorage.removeItem('nom');
}