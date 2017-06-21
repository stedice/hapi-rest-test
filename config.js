'use strict';

var config = {
	development: {
		host:'localhost',
		port: process.env.PORT || 8000
	},
	production: {
		host:'localhost',
		port: process.env.PORT || 8080
	}
}

exports.get = function get(env) {
  return config[env];
}