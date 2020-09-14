let organizacao = "Petshop Node";

let pets = [
    {
        nome: "frajola",
        tipo: "gato",
        raca: "vira lata",
        idade: 1,
        genero: "masculino",
        vacina: true,
        servico: []
    },
    {
        nome: "guga",
        tipo: "tartaruga",
        raca: "tirge dagua",
        idade: 2,
        genero: "masculino",
        vacina: false,
        servico: []
    }
]

const listarPets = () =>
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
 const validarPet = (dadosPet)=> {
   return (dadosPet.nome != "undefined" &&
    dadosPet.tipo != "undefined" &&
    dadosPet.raca != "undefined" &&
    dadosPet.idade != "undefined" &&
    dadosPet.genero != "undefined" &&
    dadosPet.vacina != "undefined") ; 
 }

const novoPet = (dadosPet) =>
{
    if(typeof dadosPet == "object"){
    if (validarPet(dadosPet)){
    pets.push(dadosPet)
    console.log(pets);
    } else { 
        console.log("Dados do pet incompleto!")
    }  
} 
    else {
        console.log("Cadastro invalido!")
    }
}

const listaDeVacina = () =>
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
    vacina:true,
    servico: []
}

novoPet(dadosPet);

//listarPets();
//listaDeVacina();

const servicos = (pet, callback) => {
    return;
}
const darBanhoNoPet = (pet) => {
pets.servico.push("banho")
console.log(" o pet " + pets.nome + "tomou banho")
}
const tosarPet = (pet) => {
pets.servico.push("tosa")
console.log("o pet " + pets.nome + "foi tosado")
} 

servicos(pets[0],darBanhoNoPet)
servicos(pets[0],tosarPet)