let fs = require('fs')

// let data = fs.readFileSync('example.txt')
// console.log(data.toString())

fs.readFile('example.txt', (error, data) => error ? console.log(error) : console.log(data.toString()))
console.log('end program')