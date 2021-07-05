pragma solidity ^0.5.13;

contract MySharedWallet {

    event UserEvent(address indexed _from, string indexed _name uint _value);

    struct Payment {
        uint amount;
        uint timestamp;
    }

    struct User {
        string username;
        uint paymentId;
        uint totalBalance;
        mapping(uint => Payment) payments;
    }

    constructor() {
        Payment pymt = Payment(1000 ether,block.timestamp);
        userBalancedReceived[msg.sender].totalBalance = 1000 ether;
        userBalancedReceived[msg.sender].username = "Kada Kandhu Vatti Shop";
        userBalancedReceived[msg.sender].paymentId = 1;
        userBalancedReceived[msg.sender].payments[1] = pymt;   

        emit UserEvent(msg.sender,"IN CONSTRUCTOR=PARENT",userBalancedReceived[msg.sender].totalBalance);
    }

    mapping(address => User) public userBalancedReceived;

    function getRootBalance() public view returns(uint){
        return address(this).balance;
    }

    function getBalanceByAddress(address _to) public view returns(uint){
        return userBalancedReceived[_to].totalBalance;
    }


}