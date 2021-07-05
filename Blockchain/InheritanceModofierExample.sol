pragma solidity ^0.5.11;

contract Owned {
    address owner;

    constructor () {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender,"Yarru Nee");
        _;
    }
}

contract InheritanceModofierExample is Owned {
    mapping(address => unit) public tokenBalance;

    //address owner;

    uint tokenPrice = 1 ether;

    constructor() public {
        //owner = msg.sender;
        tokenBalance[owner] = 100;
    }



    function createNewToken() public onlyOwner {  
        tokenBalance[owner]++;
    }

    function burnToken() public onlyOwner {
        tokenBalance[owner]--;
    }

    function purchaseToken() public payable {
        require(tokenBalance[owner] * tokenPrice) / msg.value > 0,"Not Enough Tokens");
        tokenBalance[owner] -= msg.value / tokenPrice;
        tokenBalance[msg.sender] += msg.value / tokenPrice;
    }

    function sendToken(address _to, unit _amount) public {
        require(tokenBalance[msg.sender] >= _amount, "Not enough balance");
        assert(tokenBalance[_to] + _amount >= tokenBalance[_to]);
        assert(tokenBalance[msg.sender]- _amount <= tokenBalance[msg.sender])
    }
}