const json = require('./json')
const {listarPets,
  validaDados,
  cadastrarPet,
  vacinadosOrlando,
  servicosPrestados,
  darBanhoNoPet,
  tosarPet,
  cadastrarPetsDoJsonSpreadOperator,
  filtraPetPorNome,
  removerPet,
  atualizaPet
} = require("./funcaoPets");
const {
  calcular,
  soma,
  subtrai,
  divide,
  multiplica
} = require('../aula-08/calculadora');

// relembrando criação de uma variável com let recebendo valor de uma string
let organizacao = 'Petshop Node';

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];
// teste da funcao listarpets
//listarPets(pets)

let objPetTeste = {
  nome: 'Novo Pet 2',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

//teste da funcao cadastrar pet
//cadastrarPet(pets,objPetTeste)

// teste da funcao vacinadosOrlando
// vacinadosOrlando(pets);

//teste funcao servicosPrestados
// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// teste da funcao cadastrarPetsDoJsonSpreadOperator
// console.log(cadastrarPetsDoJsonSpreadOperator(pets, json))

//teste da funcao filtrarPerPorNome
// rever esta funcao esta dando erro
//console.log(filtraPetPorNome(pets, 'Yoshi'))

//teste da funcao removerPet
//removerPet(pets,1)

let objetoPetAtualizado = {
  nome: "Atualizando Nome",
  tipo: "Atualizando Tipo",
  raca: "siames",
  idade: 3,
  genero: "Fêmea",      
  vacinado: false
}

// teste da funcao atualizaPet
// atualizaPet(pets, 2, objetoPetAtualizado)

//teste da funcao calculadora
//calcular(10,5,soma)