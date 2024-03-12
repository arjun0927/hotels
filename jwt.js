const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req , resp , next)=>{
	// First check the user header has authorization or not 
	const authorization = req.headers.authorization;
	if(!authorization) return resp.status(401).json({error:"Token not found"});
	// Extract the jwt token from the request headers
	const token = req.headers.authorization.split(' ')[1];
	if(!token) return resp.status(401).json({error:"unauthorization"});

	try {
		// verify the jwt token 
		const decode = jwt.verify(token , process.env.JWT_SECRET );
		// Attach user information to the req object
		req.user = decode ;
		next();
	} catch (error) {
		console.log(error);
		resp.status(401).json({error:"Invalid token"})
	}
}

// Function to generate token 
const generateToken = (userdata)=>{
	// Gererate a new jwt token with userdata
	return jwt.sign(userdata,process.env.JWT_SECRET , {expiresIn:30000})
}
module.exports = {jwtAuthMiddleware , generateToken} ;