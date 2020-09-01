
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Reinaldo";
cliente1.cpf = 74312111200;
cliente1.rg= 3900919;

cliente2.nome = "Alice";
cliente2.cpf = 11122233300;

const contaCorrenteReinaldo = new ContaCorrente();
contaCorrenteReinaldo.saldo = 0;
contaCorrenteReinaldo.agencia = 1001;

contaCorrenteReinaldo.depositar(300);
const valorSacado = contaCorrenteReinaldo.sacar(50);

console.log(valorSacado)
console.log(contaCorrenteReinaldo);

console.log(cliente1);
console.log(cliente2);

