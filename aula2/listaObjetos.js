const cliente = {
    nome: "Bruno",
    idade: 24,
    email: "bruno@firma.com",
    telefone: ["42 555666777", "42 222333444"],
};

cliente.enderecos = [

    {
        rua: "R. Visconde de Nascar",
        numero: 315,
        apartamento: true,
        complemento: "bar",
    },
];

cliente.enderecos.push({
    rua: "R. Arthur Melh",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter((enderecos) => enderecos.apartamento === true);

console.log(listaApenasApartamentos);

console.log(cliente.enderecos);

