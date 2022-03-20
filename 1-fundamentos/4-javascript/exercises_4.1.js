// exercicio 1

// const a = 7
// const b = 3

// console.log (a+b)
// console.log (a-b)
// console.log (a*b)
// console.log (a/b)
// console.log (a%b)

// exercicio 2

// const a = 7
// const b = 8

// if (a > b) {
//     console.log (a)
// } else {
//     console.log (b)
// }

// exercicio 3

// const a = 11
// const b = 11
// const c = 12

// if (a > b && a > c) {
//     console.log (a)
// } else if (b > a && b > c) {
//     console.log (b)
// } else (console.log (c))

// exercicio 4

// const a = -0.000

// if (a === 0) {
//     console.log ('zero')
// } else if (a > 0) {
//     console.log ('positive')
// } else {
//     console.log ('negative')
// }

// exercicio 5

// const a = 60
// const b = 60
// const c = -61

// if (a <= 0 || b <= 0 || c <= 0 ) {
//     console.log ('opa, parece que um dos valores recebidos não é valido')
// } else if (a + b + c === 180) {
//     console.log (true)
// } else {
//     console.log (false)
// }

// exercicio 6

let chessPiece = 'pawn'

switch (chessPiece) {
    case 'king': console.log ('one square in any direction')
        break;

    case 'queen': console.log ('any number of squares in any direction')
        break;

    case 'rook': console.log ('any number of square in a straight line')
        break

    case 'bishop': console.log ('any number of square diagonally')
        break

    case 'knight': console.log ('moves on an extended diagonal from one corner of any two-by-three rectangle of squares to the farthest opposite corner')
        break

    case 'pawn': console.log ('moves forward exactly one square, or optionally, two squares when on its starting square')
    
    default: console.log ('sorry, this is not a chess piece')
        break;
}