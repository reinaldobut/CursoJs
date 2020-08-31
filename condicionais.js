console.log("Trabalhando com condicionais");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
);
const idadeComprador = 18;
console.log("Destinos possíveis");
console.log(listaDestinos);

if(idadeComprador >=18){

    console.log("Comprador maior de idade");
    listaDestinos.splice(1,1);
} else{
    console.log("Não é maior de idade e não posso vender");        
}

console.log(listaDestinos);
