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

listarPets();