pragma solidity ^0.5.13;

contract MappingsStructExample {
    mapping(address => uint) public balancedReceived;

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function receiveMoney() public payable {
        balancedReceived[msg.sender] += msg.value;
    }

    function sendAllMoney(address payable _to) public {
        uint balanceToSend = balancedReceived[msg.sender];
        balancedReceived[msg.sender] = 0;
        _to.transfer(balanceToSend);
    }
} 