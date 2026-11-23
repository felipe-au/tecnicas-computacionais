const nomes = ["Ben10", "Pir", "Goku", "Gta6", "Junior", "Formula 1", "Gabriel"];

export function aleatorio(lista) {
	const posicao = Math.floor(Math.random() * lista.length);
	return lista[posicao];
}

export const nome = aleatorio(nomes);
