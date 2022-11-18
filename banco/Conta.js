export class Conta {
    #primeiroNome
    #ultimoNome
    #cpf
    #conta
    #saldo

    constructor(primeiroNome, ultimoNome, cpf, conta, saldo) {
        this.#setPrimeiroNome(primeiroNome)
        this.#setUltimoNome(ultimoNome)
        this.#setCpf(cpf)
        this.#setConta(conta)
        this.#setSaldo(saldo)
    }

    saque(value) {
        return `Conta: ${this.#getConta()}\nTitular: ${this.#getNome()}\nValor retirado: R$ ${value}\nSaldo: R$ ${this.#getSaldo()}`
    }
    deposito(value) {
        return `Conta: ${this.#getConta()}\nTitular: ${this.#getNome()}\nValor depositado: R$ ${value}\nSaldo: R$ ${this.#getSaldo()}`
    }
    saldo() {
        return `Conta: ${this.#getConta()}\nTitular: ${this.#getNome()}\nSaldo: R$ ${this.#getSaldo()}`
    }

    toString() {
        return `${super.toString()}\nConta: ${this.#getConta()}\nTitular: ${this.#getNome()}\nSaldo: R$ ${this.#getSaldo()}`
    }

    #getNome() {
        return `${this.#getPrimeiroNome()} ${this.#getUltimoNome()}`
    }

    #getPrimeiroNome() {
        return this.#primeiroNome
    }
    #setPrimeiroNome(primeiroNome) {
        return this.#primeiroNome = primeiroNome
    }

    #getUltimoNome() {
        return this.#ultimoNome
    }
    #setUltimoNome(ultimoNome) {
        this.#ultimoNome = ultimoNome
    }

    #getCpf() {
        return this.#cpf
    }
    #setCpf(cpf) {
        this.#cpf = cpf
    }

    #getConta() {
        return this.#conta
    }
    #setConta(conta) {
        this.#conta = conta
    }

    #getSaldo() {
        return this.#saldo
    }
    #setSaldo(saldo) {
        this.#saldo = saldo
    }
}