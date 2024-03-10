const express = require('express');
const router = express.Router();
const Person = require('../model/Person')

router.post("/", async (req, resp) => {
	try {
		const data = req.body; // Assuming the req.body contains the Person data

		const personData = new Person(data) // Creating a new Person document using Mongoose model
		// save the new person data
		const response = await personData.save();
		console.log("Data save Successfully");
		resp.status(200).json(response);

	} catch (error) {
		console.log(error);
		resp.status(500).json({ error: 'Internal server error' })
	}
})

// Get Method
router.get('/', async (req, resp) => {
	try {
		const data = await Person.find();
		console.log("Data find Successfully");
		resp.status(200).json(data);
	} catch (error) {
		console.log(error);
		resp.status(500).json({ error: 'Internal server error' })
	}
})
router.get('/:workType',async (req,resp)=>{
	try {
		const workType = req.params.workType ;
		if(workType === "chef" || workType=== "manager" || workType==="waiter"){
			const response = await Person.find({work : workType});
			console.log("data fetched");
			resp.status(200).json(response);

		}
		else{
			resp.status(404).json({error:"invalid workType error"});
		}
	} catch (error) {
		console.log(error);
		resp.status(500).json({ error: 'Internal server error' })
	}
})

router.put('/:id',async(req,resp)=>{
	try {
		const personId = req.params.id ;
		const updatedPersonData = req.body ;
		const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
			new : true , // Return updated data or document
			runValidators : true // Run mongoose validation
		})
		if(!response){
			resp.status(404).json({error : "person not found"})
		}
		console.log("Data saved");
		resp.status(200).json(response);
	} catch (error) {
		console.log(error);
		resp.status(500).json({ error: 'Internal server error' })
	}
})
router.delete('/:id', async(req,resp)=>{
	try {
		const personId = req.params.id;
		const response = await Person.deleteOne({_id:personId});
		if(!response){
			resp.status(404).json({error : "person not found"})
		}
		console.log("Data deleted Successfully");
		resp.status(200).json(response);
	} catch (error) {
		console.log(error);
		resp.status(500).json({ error: 'Internal server error' })
	}
})

module.exports = router ;