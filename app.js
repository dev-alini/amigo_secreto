let nomes = [];

function adicionarNome() {
    let inputNome = document.getElementById("nome");
    let nome = inputNome.value.trim();
    let listaNomes = document.getElementById("listaNomes");
    let mensagemErro = document.getElementById("mensagemErro");

    if (nome === "") {
       alert("Por favor, insira um nome válido.");
        return;
    }

    nomes.push(nome);
    inputNome.value = "";
    mensagemErro.textContent = "";
    atualizarLista();
}
S
function atualizarLista() {
    let listaNomes = document.getElementById("listaNomes");
    listaNomes.innerHTML = "";
    
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        li.classList.add("list-group-item");
        listaNomes.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let mensagemErro = document.getElementById("mensagemErro");
    
    if (nomes.length === 0) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
}
