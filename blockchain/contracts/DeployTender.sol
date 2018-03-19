pragma experimental ABIEncoderV2;



contract DeployedTender {

    address creator;
    address[10] oracles;
    
    
    struct oracleEvaluation{
        string docAddress;
        string docHash;
        
    }
    
    mapping(address => oracleEvaluation) oracleData;
    
    function DeployedTender() public payable{
        creator = msg.sender;
        
    }
    
    
    //check if oracle exists
    function checkIfOracleExists(address addr) returns (bool){
        for(uint i =0; i <9 ; i ++){
            if(oracles[i] == addr){
                return true;
            }
        }
        return false;
    }
    
    
    //add a oracle
    function addOracle(address addr) public returns (uint) {
        if(creator == msg.sender && !checkIfOracleExists(addr)){
            return oracles.length;
            oracles[oracles.length]=addr;
           // return true;
        }
        else{
           // return false;
        }
    }
    

    
    //add orcale oracle data
    function addOracleData(address addr , string docHash, string docAddr) public payable returns (bool){
        if(checkIfOracleExists(addr)){
            oracleData[addr] = oracleEvaluation(docAddr,docHash);
        }
    }
    
    
    //get a user using public key
    function getOracleList() public returns (address[10]) {
        return oracles;
    }
    
    function getOracleData(address addr) public payable returns (oracleEvaluation){
        if(checkIfOracleExists(addr)){
            return oracleData[addr];
        }
            
        
    }
    
    function getCreator() public payable returns (address) {
        return creator;
    }
    
}