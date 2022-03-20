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

// let soma = 0
// let media = 0

// for (i = 0; i < numbers.length; ++i) {
//     soma += numbers[i]
//     media = soma / numbers.length
// }

// console.log (media)

// exercicio 4

// let soma = 0
// let media = 0

// for (i = 0; i < numbers.length; ++i) {
//     soma += numbers[i]
//     media = soma / numbers.length
// } if (media > 20) {
//     console.log ('valor maior que 20')
// } else ('valor menor que 20')

// exercicio 5

// let maior = 0

// for (i = 0; i < numbers.length; ++i) {
//     if (numbers[i] > maior) {
//         maior = numbers[i]
//     }
// }

// console.log (maior)

// exercicio 6

// let impares = 0

// for (i = 0; i < numbers.length; ++i) {
//     if (numbers [i] % 2 === 1) {
//         impares +=1
//     }
// }

// if (impares === 0) {
//     console.log ('nenhum valor impar encontrado')
// } else {
//     console.log (impares)
// }

// exercicio 7

let menor = numbers[0]

for (i = 0; i < numbers.length; ++i) {
    if (numbers[i] < menor) {
        menor = numbers[i]
    }
}

console.log (menor)