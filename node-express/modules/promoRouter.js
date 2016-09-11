var express = require('express');
var bodyParser = require('body-parser');


module.exports = function() {

	var promoRouter = express.Router();
	promoRouter.use(bodyParser.json());

	promoRouter.route('/')
	.all(function(req,res,next) {
	      res.writeHead(200, { 'Content-Type': 'text/plain' });
	      next();
	})

	.get(function(req,res,next){
	        res.end('Will send all the promotions to you!');
	})

	.post(function(req, res, next){
	    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);    
	})

	.delete(function(req, res, next){
	        res.end('Deleting all promotions');
	});

	promoRouter.route('/:promId')
	.all(function(req,res,next) {
	      res.writeHead(200, { 'Content-Type': 'text/plain' });
	      next();
	})

	.get(function(req,res,next){
	        res.end('Will send details of the promo: ' + req.params.promId +' to you!');
	})

	.put(function(req, res, next){
	        res.write('Updating the promo: ' + req.params.promId + '\n');
	    res.end('Will update the promo: ' + req.body.name + 
	            ' with details: ' + req.body.description);
	})

	.delete(function(req, res, next){
	        res.end('Deleting promo: ' + req.params.promId);
	});

	return promoRouter;
}