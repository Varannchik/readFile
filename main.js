const fs = require('fs');

function readFile(url) {
    return new Promise(function (res, rej) {
        fs.readFile(url, 'utf8', function (err, contents) {
            if (err){
                rej(err);
                return
            }
                
            else{
                res(contents);
            }
                
        });
    });
}
readFile('text.txt')
    .then (text=>console.log(text))
    .catch(err=>console.log(err))
