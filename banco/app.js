import { Poupanca } from "./poupanca.js";
import { Corrente } from "./Corrente.js"
import { Investimento } from "./investimento.js"


const contaCorrente = new Corrente('Filipe', 'Silva', 13217908643, 42342, 10000)
const contaPoupanca = new Poupanca('Tyler', 'Silva', 1591575736985, 27648, 100000)
const contaInvestimento = new Investimento('Arthur', 'Silva', 32765485201, 68719, 1000000)

console.log(contaPoupanca.saldo() + "\n");
console.log(contaPoupanca.mes() + "\n");
console.log(contaPoupanca.mes() + "\n");
console.log(contaPoupanca.deposito(10000) + "\n");
console.log("================================================\n");
console.log(contaCorrente.saldo() + "\n");
console.log(contaCorrente.mes() + "\n");
console.log(contaCorrente.mes() + "\n");
console.log(contaCorrente.deposito(1000) + "\n");
console.log("================================================\n");
console.log(contaInvestimento.saldo() + "\n");
console.log(contaInvestimento.mes() + "\n");
console.log(contaInvestimento.mes() + "\n");
console.log(contaInvestimento.saque(1000000) + "\n");
console.log("================================================\n");

let contas = []
contas.push(contaInvestimento)
contas.push(contaPoupanca)
contas.push(contaCorrente)

contas.forEach((conta)=>{
    console.log(conta.toString())
})