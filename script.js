
// Crie um objeto que receba ao menos três propriedades sobre você.
let papelaria = {
    nome: "Papelaria 5 irmãos",
    papel: ["Oficio", "40 kilos", "Sulfite"],
    lapis: "colorido"
}
console.log(papelaria)
// Adicione uma nova propriedade sem alterar seu objeto inicial.
papelaria.lapiseiras = ["ponta 0.5", "ponta 0.7", "ponta 1.0"]
console.log(papelaria)
// Remova uma propriedade desse objeto.
delete papelaria.papel
console.log(papelaria)
//Mostre no console todas as propriedades desse objeto.
console.log(papelaria)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome: "Ivan",
        idade:29, 
        telefone: 98721-5678,
        amigos: ["Nati", "Veronica", "Mayara", "Wendel"]
    },
    {
        nome: "Nati",
        idade:31, 
        telefone: 97952-4718,
        amigos: ["Ivan", "Veronica", "Suellen", "Thais"]
    }, 
    {
        nome: "Veronica",
        idade:30, 
        telefone: 98141-7780,
        amigos: ["Nati", "Bruna", "Samara", "Rodrigo"]
    },
    {
        nome: "Mayara",
        idade:28, 
        telefone: 98737-7805,
        amigos: ["Ruan", "Felipe", "Adriel", "Lucas"]
    },
    {
        nome: "Otavio",
        idade:20, 
        telefone: 95785-6548,
        amigos: ["Olavo", "Odilon", "Otasilio", "Olivia"]
    },
]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[2])