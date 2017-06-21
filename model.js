'use strict';

const fs = require('fs');
const fileName= 'data.json';

module.exports = {
    'saveToFile':function(obj){
        const jsonData = JSON.stringify(obj, null, '\t');
        console.log(jsonData);

        fs.writeFile(fileName, jsonData, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('File saved successfully');
        });
    },
    'getFromFile':function(){
        console.log('Retrieve data from file')
        return JSON.parse(fs.readFileSync(fileName, 'utf8'));
    }
};