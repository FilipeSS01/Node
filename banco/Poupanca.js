import { Conta } from './Conta.js';

export class Poupanca extends Conta {

    constructor(primeiroNome, ultimoNome, cpf, conta, saldo) {
        super(primeiroNome, ultimoNome, cpf, conta, saldo);
    }

    mes() {
        super.setSaldo(this.getSaldo() * 1.007)
        return `${super.mes()}\nRendimento: R$ ${super.getSaldo() - (super.getSaldo() / 1.007)}`
    }

    saque(value) {
        return super.saque(value)
    }

    deposito(value) {
        return super.deposito(value)
    }

    saldo() {
        return super.saldo()
    }
}