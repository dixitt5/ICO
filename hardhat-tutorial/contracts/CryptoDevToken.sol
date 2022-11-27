// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ICryptoDevs.sol";

contract CryptoDevsToken is ERC20, Ownable {
    ICryptoDevs CryptoDevsNFT;

    constructor(address _cryptoDevsContract) ERC20("Crypto Dev Token", "CD") {}
}
