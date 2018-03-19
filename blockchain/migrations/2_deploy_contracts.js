var Tender = artifacts.require("Tender");
var TenderDeployFactory = artifacts.require("TenderDeployFactory");



module.exports = function(deployer) {
  deployer.deploy(Tender);
  deployer.deploy(TenderDeployFactory);
  
};