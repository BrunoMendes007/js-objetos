function encontrarTelefonesInvalidos(lista) {
  const invalidos = lista.filter(p => {
    if (!p.telefone || p.telefone.length < 2) return true;
    
    const tel1 = p.telefone[0];
    const tel2 = p.telefone[1];
    
    const ddd = tel1.substring(0, 2);
    const restoNumero = tel1.substring(2);
    const telefoneCorretoEsperado = `${ddd}9${restoNumero}`;
    
    return tel2 !== telefoneCorretoEsperado;
  });

  return invalidos.map(p => p.nome);
}