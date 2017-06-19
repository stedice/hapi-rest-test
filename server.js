'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });


server.route({
    method: 'POST',
    path: '/save',
    handler: function (request, reply) {
        reply('Hello, world!');
        console.log(request.payload);
    }
});


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/form',
        handler: function (request, reply) {
            reply.file('./markup.html');
        }
    });
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});