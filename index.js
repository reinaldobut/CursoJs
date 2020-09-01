
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Reinaldo", 74312111200);
const cliente2 = new Cliente("Alice",33322211100);

const contaCorrenteReinaldo = new ContaCorrente(1001, cliente1);
contaCorrenteReinaldo.depositar(500);
const conta2 = new ContaCorrente(102,cliente2);

contaCorrenteReinaldo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);

