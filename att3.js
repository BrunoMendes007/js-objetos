function gerarEtiquetasEntrega(lista) {
  lista.forEach(p => {
    const end = p.endereco;
    const complementoStr = end.complemento ? ` [${end.complemento}]` : '';
    const cepStr = end.cep ? ` - ${end.cep}` : '';
    
    console.log(`${p.nome} - ${end.logradouro}, ${end.numero}${complementoStr}${cepStr}`);
  });
}