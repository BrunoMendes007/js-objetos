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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessario ter um endereço cadastrado.");
}

function ligaParaCliente(telefoneComaercial, telefoneResidencial){
    conso
}