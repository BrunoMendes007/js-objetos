function agruparPorDDD(lista) {
  return lista.reduce((acumulador, personagem) => {
    if (personagem.telefone && personagem.telefone.length > 0) {
      const ddd = personagem.telefone[0].substring(0, 2);
      
      if (!acumulador[ddd]) {
        acumulador[ddd] = [];
      }
      
      acumulador[ddd].push(personagem.nome);
    }
    return acumulador;
  }, {});
}