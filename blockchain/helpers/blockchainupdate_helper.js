var firebase = require('firebase');

let Web3 = require('web3'); 
let web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));






//uploads
var blockNumber = 0
function updateBlockchainData() {
	blockData = web3.eth.getBlock(blockNumber);
	if(blockData){
		defaultDatabase = firebase.database();
		var ref = defaultDatabase.ref("blockchain/"+blockNumber);
		blockUploadData = blockData;
		blockUploadData.transactionData = [];
		blockUploadData.difficulty = blockUploadData.difficulty.toString();
		blockUploadData.totalDifficulty = blockUploadData.totalDifficulty.toString();
		blockUploadData.id = blockNumber;
		blockUploadData.miner = "0xfe541e9c2a36a1e842cbebede2bca0fd0ab2e073";
		for (var i = 0; i < blockData.transactions.length; i++) {
			trans = web3.eth.getTransaction(blockData.transactions[i]);
			if(trans.to=="0x0"){
				trans.transactionType = "Contract creation";
			}
			else if(trans.input=="0x0"){
				trans.transactionType = "transaction";
			}
			else{
				trans.transactionType = "Contract called";
			}
			trans.value = trans.value.toString();
			trans.gasPrice = trans.gasPrice.toString();
			blockUploadData.transactionData.push(trans)
		}
		ref.set(blockUploadData);
		blockNumber = blockNumber +1;
	}
}

function startBlockchainUpdater(clearFirebase) {
	try{

		defaultDatabase = firebase.database();
		if(clearFirebase == true){
			clearBlockchainFirebase();
		}

		setInterval(updateBlockchainData,500);
	}
	catch(e){
		console.log(e)
	    setTimeout(()=>{startBlockchainUpdater(startBlockchainUpdater);}, 1000);
	}
	
	
}


// clears the blockchain data before starting
function clearBlockchainFirebase() {
	defaultDatabase = firebase.database();
	var ref = defaultDatabase.ref("blockchain");
	ref.remove();
}


module.exports = {
	startBlockchainUpdater:startBlockchainUpdater
}