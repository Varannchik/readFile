const fs = require('fs');
function readFile(url) {
    return new Promise(function (res, rej) {
        fs.readFile(url, 'utf8', function (err, content) {
            if (err){
                rej(err);
                return
            }
                
            else{
                res(content);
            }
                
        });
    });
}

module.exports = readFile;