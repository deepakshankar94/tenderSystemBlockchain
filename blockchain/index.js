// BASE SETUP
// =============================================================================

var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var firebaseHelper = require('./helpers/firebase_helper')
var blockchainUpdateHelper = require('./helpers/blockchainupdate_helper')
var tenderDeployedRoute = require('./routes/tenderDeploy')



// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port


//connect to db
firebaseHelper.establishDatabaseConnection();

// start blockchain updater to firebase
blockchainUpdateHelper.startBlockchainUpdater(true);

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'test' });	
});

// on routes that end in /blockchain
// ----------------------------------------------------
router.route('/tederDeployed').post(tenderDeployedRoute.onTenderDeployed)

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		res.json({ message: 'get' });
		
		
	});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

	// get the bear with that id
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})

	// update the bear with this id
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})

	// delete the bear with this id
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API running on port ' + port);