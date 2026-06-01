const cliente = {
    nome: "Bruno",
    idade: 17,
    email: "bruno@backend.com",
    telefone: ["42 3649236438", "42 823674293"],
};

cliente.enderecos = [

    {
         rua: "R. Joseph Climber",
        numero: 6767,
        apartamento: true,
        complemento: "ap 67",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);

