const dados = [
    {
        "nome": "Marcio Torres",
        "cpf": "34359912300",
        "matricula": "2025002233"
    },
    {
        "nome": "Rafael Betito",
        "cpf": "88293466232",
        "matricula": "2025992444"
    },
    {
        "nome": "Eduardo Brião",
        "cpf": "08415693422",
        "matricula": "2024230055"
    }
];

function buscar(nome, cpf, matricula, exato) {
    return dados.filter(registro => {
        if (exato) {
            return registro.nome === nome || registro.matricula === matricula || registro.cpf === cpf;
        } else {
            return registro.nome.indexOf(nome) >= 0 || registro.cpf.indexOf(cpf) >= 0 || registro.matricula.indexOf(matricula) >= 0;
        }
    })
}

console.log(buscar('Marcio'))