pragma experimental ABIEncoderV2;

import "./DeployTender.sol";

contract TenderDeployFactory {

    function TenderDeployFactory() {
    }

    function newTenderDeploy(string a) public payable returns (address newTender) {
        DeployedTender dt = (new DeployedTender());
        return address(dt);
    }
}

