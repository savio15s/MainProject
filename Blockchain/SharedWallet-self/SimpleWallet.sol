pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract SimpleWallet is Ownable {
    
    event log(
            string value,
            address addr
        );
    
    mapping(address => uint) public allowance;
    
    address public thisOwner;
    
    constructor() public {
        emit log("tHE OWNER IS ..",msg.sender); 
        thisOwner = msg.sender;
    }
    
    function addAllowance(address _who,uint _amount) public onlyOwner {
        allowance[_who] = _amount;
    }
    
    modifier ownerOrAllowed(uint _amount){
        require(thisOwner == msg.sender || allowance[msg.sender] >= _amount,"Isan:You are not allowed");
        _;
    }
    
    
    function reduceAllowance(address _who,uint _amount) internal {
        allowance[_who] = allowance[_who] - _amount;
    }
    
    function withdrawMoney(address payable _to, uint _amount) public ownerOrAllowed(_amount) {
        _to.transfer(_amount);
    }
    
    receive() external payable {
        
    }
    
    
    
    
}