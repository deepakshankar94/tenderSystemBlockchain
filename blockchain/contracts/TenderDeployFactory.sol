pragma solidity ^0.4.8;

contract ParticipationFactory {

    function ParticipationFactory() {
    }

    function newParticipation() public returns (address newParticipation) {
        participation p = (new participation());
        return address(p);
    }
}


contract participation {

    address creator;
    
    
    struct User{
        address userPubKey;
        string name;
        uint[] tendersApplied;
        bool isMiner;
        bool isVendor;
        
    }
    
    // User [] users;
    mapping(address => User) users;
    
    address[] public userAddresses;
    
    
    
    //add a user
    function addUser(address _userPubKey, string _name, bool _isMiner, bool _isVendor) public returns (bool) {
        if(creator == msg.sender){
            
            if(_isMiner == _isVendor){
                return false;
            }
            User memory usr = users[_userPubKey];
        
            usr.userPubKey = _userPubKey;
            usr.name = _name;
            usr.tendersApplied = new uint[] (0);
            usr.isMiner = _isMiner;
            usr.isVendor = _isVendor;
            
            userAddresses.push(_userPubKey) -1;
            return true;
        }
        else{
            return false;
        }
    }
    
    //get a user using public key
    function getUser(address _userPubKey) public returns (address,string,uint[],bool,bool) {
        User memory user = users[_userPubKey];
        return (user.userPubKey,user.name,user.tendersApplied,user.isMiner,user.isVendor);
    }
    
    
    function participation() public{
        creator = msg.sender;
        
    }
    
    function applyTender(address _userPubKey, uint tenderId) returns(bool){
        User storage user = users[_userPubKey];
        user.tendersApplied.push(tenderId);
        return true;
    }
    
    function getUserTenderList(address _userPubKey) returns(uint[]){
        return users[_userPubKey].tendersApplied;
    }
   
//   function setCreator(address _creatorAddress) returns (bool){
//       creator = _creatorAddress;
//       return true;
//   }
}