'use strict';

const Hapi = require('hapi');
const myRoutes = require('./routes');
const Config = require('./config').get(process.env.NODE_ENV);

const server = new Hapi.Server();
server.connection({ port: Config.port, host: Config.host});

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