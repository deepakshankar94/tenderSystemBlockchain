let Web3 = require('web3');
var provider = new Web3.providers.HttpProvider("http://localhost:7545");
var contract = require("truffle-contract");
let fs = require("fs");
let solc = require("solc");
let web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));

let source = fs.readFileSync("./build/contracts/Tender.json","utf8");
let contractJSON = JSON.parse(source)
let abi = contractJSON.abi;
let MyContract = web3.eth.contract(abi);

let source2 = fs.readFileSync("./build/contracts/participation.json","utf8");
let contractJSON2 = JSON.parse(source2)
let abi2 = contractJSON2.abi;
let MyContract2 = web3.eth.contract(abi2);
let participationContractAddr = "";


exports.onTenderCreate = function(req,res){
	let deployedContract = MyContract.new([],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
	var contractInstance = MyContract.at(deployedContract.address);

	res.send(deployedContract.address);

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