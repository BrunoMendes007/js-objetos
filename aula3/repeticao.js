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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function"){ 
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}