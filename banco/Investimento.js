import { Conta } from './Conta.js';

export class Investimento extends Conta {

    constructor(primeiroNome, ultimoNome, cpf, conta, saldo) {
        super(primeiroNome, ultimoNome, cpf, conta, saldo);
    }

    mes() {
        this.setSaldo((this.getSaldo() * 1.013) - 10)
        return `${super.saldo()}\nRendimento: R$ ${this.getSaldo() - (this.getSaldo() / 1.013)}\nManutenção: R$ 10`
    }

    saque(value) {
        this.setSaldo(this.getSaldo() - 25)
        return `${super.saque(value)}\nValor da operação: R$ 25`
    }

    deposito(value) {
        return super.deposito(value)
    }

    saldo() {
        return super.saldo()
    }
}