//exercicio 1

// let valores = []
// let dezFatorial = 1

// for (i = 1; i < 11; ++i) {
//     valores.push (i)
// }

// for (i = 0; i < valores.length; ++i) {
//     dezFatorial *= valores[i]
// }

// console.log (dezFatorial)

// outra forma

// let fatorial = 1

// for (i = 10; i > 0; i -= 1) {
//     fatorial *= i
// }

// console.log (fatorial)

//exercicio 2

let texto = 'tryber'

let inverso = texto.split ('').reverse().join("")

console.log (inverso)

// .split (''): cria array, separando a string em letras (inclusive os espaços)
// .split (' '): cria array, separando a string em palavras
// .split (' ', 3): neste caso, cria-se a array parando no terceiro valor
// .reverse(): inverte a ordem dos elementos do array
// .join (): retorna o array como string