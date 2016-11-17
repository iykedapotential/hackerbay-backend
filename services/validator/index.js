"use strict";
var util = require('util');
var debug = require('debug')('validator');

module.exports = function(req, res, next){
	debug('starting validation check.');
	debug('What we got: ', req.body);
	console.log(req.body);
	var parameters = req._required;
	if(parameters.length){
		var last = parameters.length - 1;
		for(var n in parameters){
			if(parameters[n]){
				debug('validating '+parameters[n]);
				req.check(parameters[n], parameters[n]+' is required').notEmpty();

				// To skip escape and trim on some parameters
				if(parameters[n] === 'param1noescape' || parameters[n] === 'param2notrim'){
					// Skip
				}else{
					req.sanitize(parameters[n]).escape();
					req.sanitize(parameters[n]).trim();
				}
				
				if((n*1) === last){
					
					debug('validation over, lets take it home...');
					var errors = req.validationErrors();
					if (errors) {
						res.badRequest(util.inspect(errors), 'Validation error.');
						
					}else{
						
						next();
					}
				}
			}
		}
	}else{
		
		next();
		
	}
	
};
