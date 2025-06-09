class Estudante {
    constructor(nome, sobrenome, matricula) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
    }

    getNomeCompleto() {
        return [this.nome, this.sobrenome].join(' ');
    }
}

const e = new Estudante('Marcio', 'Torres', 2025993311);

console.log(e.getNomeCompleto());