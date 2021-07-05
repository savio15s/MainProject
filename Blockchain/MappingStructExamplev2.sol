pragma solidity ^0.5.13;

contract MappingsStructExamplev2 {

    struct Payment {
        uint amount;
        uint timestamp;
    }

    struct Balance {
        uint totalBalance;
        uint numPayments;
        mapping(uint => Payment) payments;
    }


    mapping(address => Balance) public balancedReceived;

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function receiveMoney() public payable {
        balancedReceived[msg.sender].totalBalance += msg.value;
        Payment memory payment = Payment(msg.value,now);
        balancedReceived[msg.sender].payments[balancedReceived[msg.sender].numPayments] = payment;
        balancedReceived[msg.sender].numPayments++;
    }

    function sendMoney(address payable _to,uint _amount) public {
        require(balancedReceived[msg.sender].totalBalance >= _amount,"Dabbu leathu Naina");
        balancedReceived[msg.sender].totalBalance -= _amount;
        _to.transfer(_amount);
    }

    function sendAllMoney(address payable _to) public {
        uint balanceToSend = balancedReceived[msg.sender].totalBalance;
        balancedReceived[msg.sender].totalBalance = 0;
        //requite(balancedReceived[msg.sender].totalBalance >= amount,"Dabbu leathu Naina");
        //balancedReceived[msg.sender].totalBalance -= _amount;
        _to.transfer(balanceToSend);
    }
} 