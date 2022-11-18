import { Conta } from './Conta.js';

export class Corrente extends Conta {

    constructor(primeiroNome, ultimoNome, cpf, conta, saldo) {
        super(primeiroNome, ultimoNome, cpf, conta, saldo);
    }

    mes() {
        this.setSaldo(this.getSaldo() - 5)
        return `${super.saldo()}\nManutenção: R$ 5`
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