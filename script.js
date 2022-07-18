let form = document.querySelector("form");
let nom = document.querySelector("#nom");
let okButton = document.querySelector("#button");
let age = document.getElementById("age");
let salut = document.querySelector(".greet");
let delButton = document.getElementById("delete");

okButton.addEventListener("click", function(e) {
    e.preventDefault();
    const user = {
        nom: nom.value,
        age: age.value,
    };
    localStorage.setItem("nom", JSON.stringify(user));
    form.reset();
});

const local = JSON.parse(localStorage.getItem("nom"));

if (local != null) {
    salut.textContent = `Bonjour ${local.nom} tu as ${local.age}`;
}

delButton.addEventListener("click", deleteStorage);

function deleteStorage(e) {
    e.preventDefault();
    localStorage.removeItem("nom");
}

//Masakuna Mfeng Léon