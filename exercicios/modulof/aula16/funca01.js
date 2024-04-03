function parimpar(n) { // n seria o parâmetro formal
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}  

let res = parimpar(4) //  n seria parâmetro real
console.log(res)