// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

//Selecionar todos os botões Expandir-Retrair
let botaoExpandirRetrair = document.querySelectorAll(".botao-expandir-retrair");

for (let botao of botaoExpandirRetrair) {
  botao.addEventListener("click", function(e) {
    let evento=e.currentTarget; // Descobre qual é a target do evento

    evento.parentNode.classList.toggle("expandido"); //Aplica a alteração ao parágrafo pai
    
    //Alternando os botões + para - e - para +
    botao.innerText === "+" ? (botao.innerText = "-") : (botao.innerText = "+");
  });
}