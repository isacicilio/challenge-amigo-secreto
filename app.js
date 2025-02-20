//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de amigos
let listaDeNomes = [];


function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    listaDeNomes.push(nome); 
    document.getElementById('amigo').value = ""; 

    
    let listaElement = document.getElementById('listaAmigos');
    let item = document.createElement('li'); 
    item.textContent = nome; 
    listaElement.appendChild(item); 
}


function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
    alert(`Amigo sorteado: ${listaDeNomes[indiceSorteado]}`);
}