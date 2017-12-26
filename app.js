const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Item =require('./models/item');

// Connect to Mongoose
mongoose.connect('mongodb://rachel:rachelgao@ds131687.mlab.com:31687/itemlist');

var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/items ');
});

// Call the item.js to pass the callback function; this function talking to the database 
// using find() and  return it into items. Then the "items" is stored as json in to res,
// res then is shown in the webpage.
app.get('/api/items', (req, res) => {
	Item.getItems((err, items) => {
		if(err){
			throw err;
		}
		res.json(items);
	});
});

app.get('/api/items/:_id', (req, res) => {
	Item.getItemById(req.params._id, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});

app.get('/api/items/list/:_title', function(req, res) {
	Item.searchItem(req.params._title, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
})

app.post('/api/items', (req, res) => {
	var item = req.body;
	Item.addItem(item, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});

app.put('/api/items/:_id', (req, res) => {
	var id = req.params._id;
	var item = req.body;
	Item.updateItem(id, item, {}, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});

app.delete('/api/items/:_id', (req, res) => {
	var id = req.params._id;
	Item.removeItem(id, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
