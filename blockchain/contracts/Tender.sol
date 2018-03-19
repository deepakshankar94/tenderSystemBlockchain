pragma experimental ABIEncoderV2;
contract Tender {


    string tenderName;
    string tenderDesc;
    address creator;
    struct Applicant{
        uint documentHash;
        string documentAddress;
        uint[] points;
        address userPubKey;
    }
    
    
    Applicant [] applicants; 
    
    address allotedApplicant;
    
    /// Create a new applicant
    function addApplicant(uint _documentHash, string _documentAddress, uint[] _points,  address _userPubKey) public returns (bool) {
        if(creator == msg.sender){
            Applicant memory temp = Applicant(_documentHash, _documentAddress, _points, _userPubKey);
            applicants.push(temp);
            return true;
        }
        else{
            return false;
        }
        
    }
    
    /// retrieve a applicant
    function fetchApplicant(address _applicant) public returns (Applicant){
        if(creator == msg.sender){
            Applicant storage temp = applicants[0];
            return temp;
        }
        else{
            
        }
        
    }
    
    function setupTender(string _tenderName,string _tenderDesc) public returns (bool) {
        if(creator == address(0)){
            creator = msg.sender;
            tenderName = _tenderName;
            tenderDesc = _tenderDesc;
            return true;
        }
        else{
            return false;
        }
    }
    
    function allotTender(address _userPubKey) public returns (bool){
        if(creator == msg.sender){
             allotedApplicant = _userPubKey;
            return true;
        }
        else{
            return false;
        }
       
    }
}