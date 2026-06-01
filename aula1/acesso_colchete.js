const cliente = {
    nome: "Bruno",
    idade: 16,
    CPF: "7", 
    email: "bruno.neduziak.mendes@escola.pr.gov.br",
};

console.log(`Os 3 primeiros digitos do CPF são ${cliente.CPF.substring(0, 3)}`);

const chaves =["nome", "idade", "CPF", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
