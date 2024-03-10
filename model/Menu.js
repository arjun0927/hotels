const mongoose = require('mongoose')

const menuItemSchema = mongoose.Schema({
	name : {
		type : String,
		require : true
	},
	price : {
		type : Number,
		require : true 
	},
	taste : {
		type : String,
		enum : ["sweet","spicy","sour"],
		require : true 
	},
	is_drink : {
		type : Boolean ,
		default : false 
	},
	ingredients : {
		type : [String],
		default : []
	},
	num_sales : {
		type : Number ,
		default : 0  
	}
})

const Menu = mongoose.model("menu",menuItemSchema);
module.exports = Menu ;