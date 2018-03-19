let Web3 = require('web3');
// var provider = new Web3.providers.HttpProvider("http://localhost:7545");
//var contract = require("truffle-contract");
let fs = require("fs");
var firebase = require('firebase');
let config = require('../config')
// defaultDatabase = firebase.database();
// var ref = defaultDatabase.ref("blockchain/"+blockNumber);
//let solc = require("solc");
let web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));




let source = fs.readFileSync("./build/contracts/TenderDeployFactory.json","utf8");
let contractJSON = JSON.parse(source)
let abi = contractJSON.abi;
console.log(abi)
let DeployedTenderContract = web3.eth.contract(abi);
let DeployedTenderContractAddress = config.tenderDeployFactoryAddr;
var DeployedTenderContractInstance = DeployedTenderContract.at(DeployedTenderContractAddress);
console.log(DeployedTenderContractAddress)




exports.onTenderDeployed = function(req,res){
	var tenderDeployedAddr = DeployedTenderContractInstance.newTenderDeploy("",{
        from: '0x1cDA38A1c625428BA49d8a8FD9E50340E7633c49',
        gas: 1500000,
        gasPrice: '30000000000000'
    },function(s,p){
    console.log( p.toString());
});

	res.send(tenderDeployedAddr);

	try{

	}catch(err){
		res.send("Error encountered.");
	}
}

exports.onTenderApplication = function(req,res){
	let contractAddress = req.body.address;
	let documentHash = req.body.documentHash;
	let documentAddress = req.body.documentAddress;
	let points = req.body.points;
	let userPubKey = req.body.userPubKey;

	
	var contractInstance = MyContract.at(contractAddress);
	try{
		contractInstance.addApplicant([documentHash, documentAddress, points, userPubKey],{from: web3.eth.accounts[0], gas: 4700000});
		res.status(200).send("successful");
	}catch(err){
		res.send("Error encountered.");
	}
}

exports.onTenderAllocation = function(req,res){
	let contractAddress = req.body.address;
	let userPubKey = req.body.userPubKey;

	var contractInstance = MyContract.at(contractAddress);

	try{
		contractInstance.allotTender([userPubKey],{from: web3.eth.accounts[0], gas: 4700000});
		res.status(200).send("Succesfully executed");
	}catch(err){
		res.send("Error encountered.");
	}
}

exports.onUserCreation = function(req,res){
	//address _userPubKey, string _name, bool _isMiner, bool _isVendor
	let userPubKey = req.body.userPubKey;
	let name = req.body.name;
	let isMiner = req.body.isMiner;
	let isVendor = req.body.isVendor;

	var contractInstance = MyContract2.at(participationContractAddr);

	try{
		contractInstance.addUser([userPubKey,name,isMiner,isVendor],{from: web3.eth.accounts[0], gas: 4700000});
		res.status(200).send("Succesfully executed");
	}catch(err){
		res.send("Error encountered.");
	}
}

exports.applyTender = function(req,res){
	//address _userPubKey, uint tenderId

	let userPubKey = req.body.userPubKey;
	let tenderId = req.body.tenderId

	var contractInstance = MyContract2.at(participationContractAddr);

	try{
		contractInstance.applyTender([userPubKey,tenderId],{from: web3.eth.accounts[0], gas: 4700000});
		res.status(200).send("Succesfully executed");
	}catch(err){
		res.send("Error encountered.");
	}

}

exports.getUserTenderList = function(req,res){
	//address _userPubKey

	let userPubKey = req.body.userPubKey;

	var contractInstance = MyContract2.at(participationContractAddr);

	try{
		contractInstance.getUserTenderList([userPubKey],{from: web3.eth.accounts[0], gas: 4700000});
		res.status(200).send("Succesfully executed");
	}catch(err){
		res.send("Error encountered.");
	}
}