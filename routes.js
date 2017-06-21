'use strict';

const myController = require('./controller');
const Joi = require('joi');

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
                validate : {
                    payload : {
                        'people[][firstname]' : Joi.array().items(Joi.string().min(1).max(100).allow('')),
                        'people[][surname]' : Joi.array().items(Joi.string().min(2).max(100).allow(''))
                    }
                },
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