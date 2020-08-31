console.log("\n Trabalhando com listas");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de janeiro";

console.log(" \n Destinos possíveis");
console.log(listaDestinos);

const podeComprar = idadeComprador >=18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if (listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Erro");
}

for(let cont=0; cont<3; cont ++){
    if (listaDestinos[cont] == destino){
        destinoExiste = true;
    }
}

    
