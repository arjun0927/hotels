const express = require('express');
const router = express.Router();
const Menu = require('../model/Menu')

router.post('/', async(req,resp)=>{
	try {
		const data = req.body ;
		const menuData = new Menu(data);
		const response = await menuData.save();
		console.log("menu data save successfully");
		resp.status(200).json(response);
	} catch (error) {
		console.log(error)
		resp.status(500).json({
			error: "Internal server error"
		})
	}
	
})
router.get('/', async(req,resp)=>{
	try {
		const data = await Menu.find() ;
		console.log("menu data find successfully");
		resp.status(200).json(data);
	} catch (error) {
		console.log(error)
		resp.status(500).json({
			error: "Internal server error"
		})
	}
	
})
module.exports = router ;
//  comment added for testing purpose 