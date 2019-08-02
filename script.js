let lista = document.querySelector("ol");
let titulo = document.querySelector("h1");
let corpo = document.querySelector("body");

lista = {
    nome = "emanuelle"
    nome = "santos"
    nome = "lima"
}
let imprimirComidas = () =>{
    for(let raiz of raizes){
        lista.innerHTML += `<li>${raiz.nome<}</li>`
    }
    corpo.style.backgroundColor = cor;
} 

let adcionarComida = (callback) =>{
    let escolherCor =prompt("digite uma cor em ingles");
    setTimeout(() =>{
        raizes.push({nome:"manuzinha"});
        callback(escolherCor)
        2000);
    }
}

adicionarComida(imprimirComidas);