console.log("Trabalhando com listas");
// const salvador = "Salvador";
// const rio = "Rio de janeiro";
// const saoPaulo = "São Paulo";

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
);
listaDestinos.push(`Curitiba`); //adicionando
console.log("Destinos possíveis");
console.log(listaDestinos);

listaDestinos.splice(1,1);
console.log(listaDestinos);
console.log(listaDestinos[2]);