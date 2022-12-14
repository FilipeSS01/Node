import { Conta } from './Conta.js';

export class Corrente extends Conta {

    constructor(primeiroNome, ultimoNome, cpf, conta, saldo) {
        super(primeiroNome, ultimoNome, cpf, conta, saldo);
    }

    mes() {
        super.setSaldo(super.getSaldo() - 5)
        return `${super.mes()}\nManutenção: R$ 5`
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