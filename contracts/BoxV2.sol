// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0;
 
contract BoxV2 {
    uint256 private value;
    string public name;
 
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
    event NameChanged(string newValue);
 
    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }
 
    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

    function setName(string memory _name) public {
        name = _name;
        NameChanged(name);
    }
}
