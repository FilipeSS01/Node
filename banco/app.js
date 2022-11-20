import { Poupanca } from "./src/Poupanca";
import { Corrente } from "./src/Corrente.js"
import { Investimento } from "./src/investimento.js"


const contaCorrente = new Corrente('Filipe', 'Silva', 13217908643, 42342, 10000)
const contaPoupanca = new Poupanca('Tyler', 'Silva', 1591575736985, 27648, 100000)
const contaInvestimento = new Investimento('Arthur', 'Silva', 32765485201, 68719, 1000000)

let contas = []
contas.push(contaInvestimento)
contas.push(contaPoupanca)
contas.push(contaCorrente)

contas.forEach((conta)=>{
    console.log(conta.saldo() + "\n");
    console.log(conta.mes() + "\n");
    console.log(conta.mes() + "\n");
    console.log(conta.deposito(1000) + "\n");
    console.log("================================================\n");
})