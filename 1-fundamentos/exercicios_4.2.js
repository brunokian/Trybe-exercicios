let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1

// for (i of numbers) {
//     console.log (i)
// }

// exercicio 2

// let soma = 0

// for (i = 0; i < numbers.length; ++i) {
//     soma += numbers[i]
// }

// console.log (soma)

// o "+=" soma o valor da direita à variavel

// exercicio 3

let soma = 0
let media = 0

for (i = 0; i < numbers.length; ++i) {
    soma += numbers[i]
    media = soma / numbers.length
}

console.log (media)

