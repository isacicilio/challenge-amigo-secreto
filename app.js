//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de amigos
let listaDeNomes = [];

// Função para adicionar um amigo à lista e exibir na tela
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    listaDeNomes.push(nome); // Adiciona o nome à lista
    document.getElementById('amigo').value = ""; // Limpa o campo de texto

    // Atualiza a lista exibida
    let listaElement = document.getElementById('listaAmigos');
    let item = document.createElement('li'); // Cria um novo item da lista
    item.textContent = nome; // Adiciona o texto ao item
    listaElement.appendChild(item); // Adiciona o item à lista
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
    alert(`Amigo sorteado: ${listaDeNomes[indiceSorteado]}`);
}