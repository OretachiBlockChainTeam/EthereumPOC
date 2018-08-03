pragma solidity ^0.4.24;

//import "https://github.com/OretachiBlockChainTeam/OretachiNoPOC/PersonIF.sol" ;
import "https://github.com/OretachiBlockChainTeam/OretachiNoPOC/ContractIF.sol";

contract PersonIF{
    function addContract(address contractAddress) public payable;
}

contract BonjourWorld is ContractIF{
    string public s = '';

    function notifyCall() payable{
        s = 'I am called';
    }

    function clearString() payable{
        s = '';
    }

    function registerBonjour(address hellowAddress) public payable{
        PersonIF person = PersonIF(hellowAddress);
        person.addContract(this);
    }
}
