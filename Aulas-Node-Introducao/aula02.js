const json = require ('./json')

let organizacao = "Petshop Node";

let pets = [
    {
        nome: "frajola",
        tipo: "gato",
        raca: "vira lata",
        idade: 1,
        genero: "masculino",
        vacina: true
    },
    {
        nome: "guga",
        tipo: "tartaruga",
        raca: "tirge dagua",
        idade: 2,
        genero: "masculino",
        vacina: false
    }
]

function listarPets()
{
    for(let i=0; i<pets.length; i++)
    {
    console.log("Nome: "  + pets[i].nome);
    console.log("Tipo: "  + pets[i].tipo);
    console.log("Raça: "  + pets[i].raca);
    console.log("Idade: " + pets[i].idade);
    console.log("Genero: "+ pets[i].genero);
    console.log("Vacina: "+ pets[i].vacina);
    }
}
 function validarPet(dadosPet){
   return (dadosPet.nome != "undefined" &&
    dadosPet.tipo != "undefined" &&
    dadosPet.raca != "undefined" &&
    dadosPet.idade != "undefined" &&
    dadosPet.genero != "undefined" &&
    dadosPet.vacina != "undefined") ; 
 }
function novoPet(dadosPet)
{
    if(typeof dadosPet == "object"){
    if (validarPet(dadosPet)){
    pets.push(dadosPet)
  // verificar essa linha do codigo o que ela esta imprimindo 
    console.log(pets);
    } else { 
        console.log("Dados do pet incompleto!")
    }  
} 
    else {
        console.log("Cadastro invalido!")
    }
}

function listaDeVacina()
{
    var petsVacinados=[];
    var petsNaoVacinados=[];
    for(let i=0; i<pets.length; i++)
    {
        if(pets[i].vacina === true) {
     
            petsVacinados.push(pets[i].nome);
        
        } else {
            petsNaoVacinados.push(pets[i].nome);
            
        }
   }
  console.log("Pets vacinados: "+ petsVacinados);
  console.log("Precisam de vacina: " + petsNaoVacinados);
}

let dadosPet= {
    nome: "pugui",
    tipo: "cachorro",
    raca: "pug",
    idade: 10,
    genero:"masculino",
    vacina:true
}

novoPet(dadosPet);

function cadastroJson(lista,json){
    let arrayPets= JSON.parse(json)
    lista.push(...arrayPets)
    return lista;
}

//listarPets();
//listaDeVacina();
//console.log(JSON.parse(json))
