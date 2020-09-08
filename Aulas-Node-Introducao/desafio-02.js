const trocaPalavrasDaFrase = (frase, palavraAlvo, palavraCerta) =
frase.replace(palavraAlvo, palavraCerta)

const trocaPalavrasDaFrase = (frase, palavraAlvo, palavraCerta) =
frase.split(palavraAlvo).join(palavraCerta)

console.log(trocaPalavrasDaFrase("Gosto de programar em VBA,pois, VBA é legal", "VBA","JS"));
