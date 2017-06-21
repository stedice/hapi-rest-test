'use strict';

const myModel = require('./model');

module.exports = {
    'getForm': function(request, reply) {
        reply.file('./markup.html');
    },
    'saveUsers': function(request, reply) {
        console.log(request.payload);
        const qs = require('qs'); // A querystring parser with nesting support
        const obj = qs.parse(request.payload);

        myModel.saveToFile(obj);

        reply(obj);
    },
    'getUsers': function(request, reply) {
        reply(myModel.getFromFile());
    }
};
