const adivinhaMelhorCurso = (curso) => {
    return new Promise((resolve, reject) => {
        if (curso == 'Full Stack') {
            resolve({
                sucess: true,
                nomeDoCurso: cursor,
                mensagem: "O curso " + curso + "realmente é o mais legal de DH"
            });
        } else {
            reject({
                sucess:false,
                mensagem: "Que pena! Você não adivinhou o melhor curso"
            });
        }
    });
}

const melhoresMateriasDoMelhorCurso = (resposta) =>{
    return new Promise((resolve, reject) =>{
        if (resposta.sucess) {
            resolve("As materias mais legais do curso " + resposta.nomeDoCurso + "são API e React")
        } else {
            reject("Não temos matérias para listar do curso" + resposta.nomeDoCurso)
        }
    });
}

let mensagem = adivinhaMelhorCurso('Full Stack')
.then(resposta => {
    return melhoresMateriasDoMelhorCurso(resposta)
})
.then(resposta => {
    return resposta
})
.catch(error => {
    console.log(error)
})

mensagem.then(resposta => {
    console.log(resposta)
})