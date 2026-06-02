const clientes = require("./cliente.json");

function filtrarHeroisEmApartamento(lista) {
  return lista.filter(heroi => heroi.endereco?.apartamento === true);
}