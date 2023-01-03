let steps = +prompt('Enter the number of steps')
let sym = prompt('Enter the symbol of gaps')
let end = prompt('Enter the end symbol')
let res = ''

for(i = 0; i < steps; i++){
    res += sym
    console.log(res + end);
}



