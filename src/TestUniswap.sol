// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

// Need to transfer from an account to 0xBCCAC23FbAAeB800187384fe0aBE3B817850AC96
contract TestUniswap {
    function greet() public pure returns (string memory) {
        return "hello";
    }

    function greetAgain(string memory gretting) public pure returns (string memory) {
        return gretting;
    }
}