let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7)
console.log(`Quantos elementos eu possuo dentro do meu array: ${num.length} e quais são ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor em ordem crescente fica assim: ${num.sort()}`)


let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}
