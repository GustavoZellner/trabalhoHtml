let link = document.querySelector("#link");
let botao = document.querySelector("#botao");

link.addEventListener("mouseover", trocaCor);
link.addEventListener("mouseout", voltaCor);
botao.addEventListener("click", alertaBotao);

function trocaCor(){
    link.style.color = "red";
}    

function voltaCor(){
    link.style.color = "blue";
}

function alertaBotao(){
    alert("Seja bem vindo, Esta é a minha página de trabalho HTML");
}