let frutas = ["Maça", "Banana", "Laranja", "Kiwi"];
let lista = document.getElementById("lista");
let botao = document.getElementById("botao");

function mostrarFrutas () {
    lista.innerHTML = "";
    for (let i = 0; i < frutas.length; i++) {
        let item = document.createElement ("li");
        item.textContent = frutas[i];
        lista.appendChild(item);
    }
}

botao.addEventListener("click", function() {
    frutas.push("Morango");
    frutas.push("Goiaba");
    frutas.push("Abacaxi");
    mostrarFrutas();
});

mostrarFrutas();