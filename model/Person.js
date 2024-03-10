const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
	name : {
		type : String,
		require : true ,
	},
	age : {
		type : String
	},
	work : {
		type : String ,
		enum : ['chef','waiter','manager'],
		require : true 
	},
	mobile : {
		type : String ,
		require : true 
	},
	email : {
		type : String ,
		require : true ,
		unique : true
	},
	address : {
		type : String
	},
	salary : {
		type : Number
	}
})

const Person = mongoose.model('Person',personSchema);
module.exports = Person ;