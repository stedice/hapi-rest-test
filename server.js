'use strict';

const Hapi = require('hapi');
const myRoutes = require('./routes');


const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

	server.route(myRoutes());
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});