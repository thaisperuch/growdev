var nome = "Thaís Peruch";
var cargo = "Developer";

var nomeHtml = document.getElementById("nomenohtml");
var cargoHtml = document.getElementById("cargonohtml");
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function clickNoProjetos() {
    console.log();
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    console.log();
    texto1.style.display = "block";
    texto2.style.display = "none";
}