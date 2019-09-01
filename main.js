
const readFile = require('./utils/readFile');

readFile('text.txt')
    .then (text=>console.log(text))
    .catch(err=>console.log(err))
