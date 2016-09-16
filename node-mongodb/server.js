var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

var dboper = require('./operations');

var url = 'mongodb://localhost:27017/conFusion';
var dishesCollName = 'dishes';

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log('connected correctly to server');

	dboper.insertDocument(
		db, 
		{
			name: 'Vadonut', 
			description: 'Test'
		}, 
		dishesCollName,
		function(result) {
			console.log(result.ops);

			dboper.findDocuments( db, dishesCollName, function (docs) {
				console.log(docs);

				dboper.updateDocument(
					db, 
					{ 
						name: "Vadonut" 
					}, { 
						description: "Updated Test" 
					}, 
					dishesCollName, 
					function (result) {
						console.log(result.result);

						dboper.findDocuments(db, dishesCollName, function (docs) {
                        	console.log(docs)

                        	db.dropCollection(dishesCollName, function (result) {

                        		console.log(result);
                        		db.close();
                        	});
                    	});
                	}
                );
		    });
		}
	);
})