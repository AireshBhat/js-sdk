export const pubkeyRouter = {
  "address": "0xEA287AF8d8835eb20175875e89576bf583539B37",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pkpNft",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newPkpNftAddress",
          "type": "address"
        }
      ],
      "name": "PkpNftAddressSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "pubkey",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "stakingContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        }
      ],
      "name": "PubkeyRoutingDataSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "nodeAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "pubkey",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "stakingContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        }
      ],
      "name": "PubkeyRoutingDataVote",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ethAddressToPkpId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getEthAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPubkey",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getRoutingData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "pubkey",
              "type": "bytes"
            },
            {
              "internalType": "address",
              "name": "stakingContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "keyType",
              "type": "uint256"
            }
          ],
          "internalType": "struct PubkeyRouter.PubkeyRoutingData",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "isRouted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pkpNFT",
      "outputs": [
        {
          "internalType": "contract PKPNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pubkeyRegistrations",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "pubkey",
              "type": "bytes"
            },
            {
              "internalType": "address",
              "name": "stakingContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "keyType",
              "type": "uint256"
            }
          ],
          "internalType": "struct PubkeyRouter.PubkeyRoutingData",
          "name": "routingData",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "nodeVoteCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nodeVoteThreshold",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pubkeys",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "pubkey",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "stakingContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newPkpNftAddress",
          "type": "address"
        }
      ],
      "name": "setPkpNftAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "pubkey",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "stakingContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        }
      ],
      "name": "setRoutingData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "pubkey",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "stakingContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        }
      ],
      "name": "voteForRoutingData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}