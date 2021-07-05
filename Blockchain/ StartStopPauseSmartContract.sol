pragma solidity ^0.8.1;

contract StartStopUpdateExample {
    address owner;
    
    bool paused;
    
    function isPauses(bool _p) public {
        paused  = _p;
    }

    constructor() public {
        owner = msg.sender;
    }

    function receiveMoney() payable public {

    }

    function withDrawallMoney(address payable _to) public {
        require(owner == msg.sender,"InValid Owner");
        require(!paused,"Paused Txn");
        _to.transfer(address(this).balance);
    }
}