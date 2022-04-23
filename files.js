const { readFile, writeFile, write } = require('fs')

readFile('./text-examples/example1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
})

writeFile('./text-examples/write-example.txt', 'This is the example write data.', {flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
        return
    }
})