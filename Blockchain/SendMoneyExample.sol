pragma solidity ^0.7.4;

contract SendMoneyExample {
    uint256 public balanceReceived;
    
    function receiveMoney() public payable  {
        balanceReceived += msg.value;
    }
    
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    function withDrawMoney() public {
        address payable to = msg.sender;
        
        to.transfer(this.getBalance());
    }
    
    function withDrawMoneyTo(address payable _to) public {
        _to.transfer(this.getBalance());
    }
}