function buscarPersonagem(lista, termoBusca) {
  const termoFormatado = termoBusca.toLowerCase();
  return lista.find(p => p.nome.toLowerCase().includes(termoFormatado));
}