const mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	condition:{
		type: String,
		required: true
	},
	rating:{
		type: Number,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	details:{
		type: String,
		required: true
	},
	imgUrl:{
		type: String,
		required: true
	}
});

const Item = module.exports = mongoose.model('Item', itemSchema);

// Get Items
module.exports.getItems = (callback, limit) => {
	Item.find(callback).limit(limit);
}

// Get Item
module.exports.getItemById = (id, callback) => {
	Item.findById(id, callback);
}

// Search by title
module.exports.searchItem = (title, callback, limit) => {
	var query = { title: new RegExp(title, "i")};
	Item.find(query, callback).limit(limit);
}
// Add Item
module.exports.addItem = (item, callback) => {
	Item.create(item, callback);
}

// Update Item
module.exports.updateItem = (id, item, options, callback) => {
	var query = {_id: id};
	var update = {
		title: item.title,
		condition: item.condition,
		rating: item.rating,
		price: item.price,
		category: item.category,
		details: item.details,
		imgUrl: item.imgUrl
	}
	Item.findOneAndUpdate(query, update, options, callback);
}

// Delete Item
module.exports.removeItem = (id, callback) => {
	var query = {_id: id};
	Item.remove(query, callback);
}

