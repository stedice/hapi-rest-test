'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./markup.html');
        }
    });

    server.route({
    method: 'POST',
    path: '/',
    handler: function (request, reply) {

        const qs = require('qs');  				// A querystring parser with nesting support
        const obj = qs.parse(request.payload);
        const jsonData = JSON.stringify(obj, null, '\t');
        console.log(jsonData);

        const fs = require('fs');
		fs.writeFile('data.json', jsonData, 'utf8', function (err) {
    		if (err) 
        		return console.log(err);
    			console.log('File saved successfully');
		});

		reply(jsonData);

   		}
	});

});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});