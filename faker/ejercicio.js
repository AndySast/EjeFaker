const fs = require('fs')
const { faker } = require('@faker-js/faker');
const { Console } = require('console');
names = ''
for(let i = 0;i<1000;i++){
    names += (faker.name.findName()) + '\n'
    }
fs.writeFileSync('names.txt', names)
console.log('file names has been create')

