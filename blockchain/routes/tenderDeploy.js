var Web3 = require('web3');
// var provider = new Web3.providers.HttpProvider("http://localhost:7545");
//var contract = require("truffle-contract");
var fs = require("fs");
var firebase = require('firebase');
var config = require('../config')
// defaultDatabase = firebase.database();
// var ref = defaultDatabase.ref("blockchain/"+blockNumber);
//var solc = require("solc");
var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));




var source = fs.readFileSync("./build/contracts/TenderDeployFactory.json","utf8");
var contractJSON = JSON.parse(source)
var abi = contractJSON.abi;
var DeployedTenderFactoryContract = web3.eth.contract(abi);
var DeployedTenderFactoryContractAddress = config.tenderDeployFactoryAddr;
var DeployedTenderFactoryContractInstance = DeployedTenderFactoryContract.at(DeployedTenderFactoryContractAddress);


var source = fs.readFileSync("./build/contracts/DeployedTender.json","utf8");
var contractJSON = JSON.parse(source)
var abi = contractJSON.abi;
var DeployedTenderContract = web3.eth.contract(abi);




exports.onTenderDeployed = function(req,res){

	var tenderDeployedAddr = DeployedTenderFactoryContractInstance.newTenderDeploy("",{
        from: web3.eth.accounts[0],
        gas: 1500000,
        gasPrice: '300000'
    },function(s,p){
	    //console.log(s);
	    if(s){
	    	res.json({ message: 'error occured' });
	    }
	     contractAddr = p.toString();
	     DeployedTenderContractInstance = DeployedTenderContract.at(contractAddr);
	     defaultDatabase = firebase.database();
		 var ref = defaultDatabase.ref("tenders/"+req.body.id)
		 .update({"tenderAddress":contractAddr});
		 res.json({ message: 'Successfully created contract vendor' });
	});


}

exports.putOracle = function(req,res){
	defaultDatabase = firebase.database();
	var data = defaultDatabase.ref("tenders/"+req.body.id).once('value').then(function(snapshot) {
  	var contractAddr = (snapshot.val() && snapshot.val().tenderAddress);
	DeployedTenderContractInstance = DeployedTenderContract.at(contractAddr);
	
	var tenderDeployedAddr = DeployedTenderContractInstance.addOracle(req.body.addr,{
        from: web3.eth.accounts[0],
        gas: 1500000,
        gasPrice: '300000'
    },function(s,p){
	    //console.log(s);
	    if(s){
	    	res.json({ message: 'couldnt add oracle' });
	    }
	    res.json({ message: 'Successfully added oracle' });
	});
}

exports.addOracleData = function(req,res){
	defaultDatabase = firebase.database();
	var data = defaultDatabase.ref("tenders/"+req.body.id).once('value').then(function(snapshot) {
  	var contractAddr = (snapshot.val() && snapshot.val().tenderAddress);
	DeployedTenderContractInstance = DeployedTenderContract.at(contractAddr);
	
	var tenderDeployedAddr = DeployedTenderContractInstance.addOracleData(req.body.addr,"/ipfs/QmZfSNpHVzTNi9gezLcgq64Wbj1xhwi9wk4AxYyxMZgtCG/","k4AxYyxM",{
        from: web3.eth.accounts[0],
        gas: 1500000,
        gasPrice: '300000'
    },function(s,p){
	    //console.log(s);
	    if(s){
	    	res.json({ message: 'couldnt add oracle data' });
	    }
	    res.json({ message: 'Successfully added oracle data' });
	});

	//send to oracle
	web3.eth.sendTransaction({from:web3.eth.accounts[0],to:web3.eth.accounts[2], value:web3.toWei(0.05, "ether")});
	//send to user
	web3.eth.sendTransaction({from:web3.eth.accounts[0],to:web3.eth.accounts[1], value:web3.toWei(1.00, "ether")});
}

