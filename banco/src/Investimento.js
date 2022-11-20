import { Conta } from './Conta.js';

export class Investimento extends Conta {

    constructor(primeiroNome, ultimoNome, cpf, conta, saldo) {
        super(primeiroNome, ultimoNome, cpf, conta, saldo);
    }

    mes() {
        super.setSaldo((super.getSaldo() * 1.013) - 10)
        return `${super.mes()}\nRendimento: R$ ${this.getSaldo() - (this.getSaldo() / 1.013)}\nManutenção: R$ 10`
    }

    saque(value) {
        super.setSaldo(super.getSaldo() - 25)
        return `${super.saque(value)}\nValor da operação: R$ 25`
    }

    deposito(value) {
        return super.deposito(value)
    }

    saldo() {
        return super.saldo()
    }
}