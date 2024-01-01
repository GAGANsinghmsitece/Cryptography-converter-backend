const axios = require("axios");

const API_KEY="f19acc34-6a17-4551-971d-38fd9a75224a";
const API_URL=" https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest";
function fetchTrendingController(req,res){
	try{
		return res
		.status(200)
		.json({
			"success":true,
			"message":"lol"
		});
	}catch(err){
		console.log(err);
		return res.
		status(500)
		.json({
			"success":false,
			"message":err.message
		});
	}
}
module.exports={fetchTrendingController};