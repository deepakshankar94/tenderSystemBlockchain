module.exports = {
	blockchainPost:blockchainPost
}


function blockchainPost(req, res) {
		
			
		data= req.body

		
			res.json({ message: 'post' });
		

}