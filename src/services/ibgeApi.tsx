export function getStates() {
  return fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
}

export function getCitiesByUF(uf: string) {
  return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
}