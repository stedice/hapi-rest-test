'use strict';

var myController = require('./controller');

module.exports = function(){
    return [
        {
            method: 'GET',
            path: '/',
            config: {
                handler: myController.getForm,
                description: 'Get HTML form'
            }
        },
        {
            method: 'POST',
            path: '/users',
            config: {
                handler: myController.saveUsers,
                description: 'Submit users'
            }
        },
        {
            method: 'GET',
            path: '/users',
            config: {
                handler: myController.getUsers,
                description: 'Retrieve users'
            }
        }
    ];
};