/* eslint-disable no-magic-numbers */
const provingMechanisms: any = {
  self: 0,
  bedrock: 1,
  cannon: 2,
  nitro: 3,
  hyperProver: 4,
  0: 'self',
  1: 'bedrock',
  2: 'cannon',
  3: 'nitro',
  4: 'hyperProver',
}
const networkIds: any = {
  mainnet: 1,
  optimism: 10,
  base: 8453,
  helix: 8921733,
  1: 'mainnet',
  10: 'optimism',
  8453: 'base',
  8921733: 'helix',
}

const actors: any = {
  deployer: '0x6cae25455BF5fCF19cE737Ad50Ee3BC481fCDdD4',
  intentCreator: '0x448729e46C442B55C43218c6DB91c4633D36dFC0',
  inboxOwner: '0xBc6c49e5CdeC14CBD10478bf56296BD63c6c3F0e',
  solver: '0x7b65Dd8dad147C5DBa896A7c062a477a11a5Ed5E',
  claimant: '0xB4e2a27ed497E2D1aD0C8fB3a47803c934457C58',
  prover: '0x923d4fDfD0Fb231FDA7A71545953Acca41123652',
  recipient: '0xC0Bc9bA69aCD4806c4c48dD6FdFC1677212503e9',
}

// Note intents currently being used are for USDC with a common set of actors
// the other data coming from the network
// Here we store a minimal set of addtional fieds
const intent: any = {
  rewardAmounts: [1001],
  targetAmounts: [1000],
  duration: 3600,
  opBaseBedrock: {
    hash: '0xb8da53479f442d4f4592d17855185eddd3b414a71a13b29f507524a05986ed04',
    fulfillTransaction:
      '0xbe0c059d4303863a225791808725ddb0c6f3b061cc4233beb1c632af561fdd24',
  },
  baseOpCannon: {
    settlementBlockTag: '0x13a303b', // 20590651n
    settlementStateRoot:
      '0x2c8ae6de0f5432d5b06626b19ec08f8948fec8c200a141bfc802dd56c310c668',
    // faultDisputeGame: '0x4D664dd0f78673034b29E4A51177333D1131Ac44',
    faultDisputeGame: {
      address: '0x212B650A940B2C9c924De8AA2c225a06Fca2E3f7',
      creationBlock: '0x139d029', // 20566057n
      resolvedBlock: '0x13a3205', // 20591109n
      gameIndex: 1709,
    },
    hash: '0xe11e44c20010fb864574e5f85f9b86d611f952835a5c772aa6606f282e72fad7',
    fulfillTransaction:
      '0xfc5e71a24a608e78c5035b112f6b58f0a922434fa5189474165910e125b09ca0',
  },
}

const networks: any = {
  mainnet: {
    network: 'mainnet',
    chainId: networkIds.mainnet,
    // The following settlement contracts are useful for event listening
    settlementContracts: {
      base: '0x56315b90c40730925ec5485cf004d835058518A0', // base L2 OUTPUT ORACLE
      optimism: '0xe5965Ab5962eDc7477C8520243A95517CD252fA9', // optimism Dispute Game Factory
    },
  },
  optimism: {
    network: 'optimism',
    chainId: networkIds.optimism,
    proverContractAddress: '0x1486388b81cBc2E8a75A7055c8a5053D04301826',
    hyperProverContractAddress: '0xAfD3029f582455ed0f06F22AcD916B27bc9b3a55',
    intentSourceAddress: '0xa6B316239015DFceAC5bc9c19092A9B6f59ed905',
    inboxAddress: '0xfB853672cE99D9ff0a7DE444bEE1FB2C212D65c0',
    intentSource: {
      minimumDuration: 1000,
      counter: 0,
    },
    proving: {
      mechanism: provingMechanisms.cannon,
      l1BlockAddress: '0x4200000000000000000000000000000000000015',
      l2l1MessageParserAddress: '0x4200000000000000000000000000000000000016',
      outputRootVersionNumber: 0,
      settlementChain: {
        network: 'mainnet',
        id: networkIds.mainnet,
        contract: '0xe5965Ab5962eDc7477C8520243A95517CD252fA9',
      },
    },
    usdcAddress: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
    hyperlaneMailboxAddress: '0xd4C1905BB1D26BC93DAC913e13CaCC278CdCC80D',
  },
  base: {
    network: 'base',
    chainId: networkIds.base,
    proverContractAddress: '0x1486388b81cBc2E8a75A7055c8a5053D04301826',
    hyperProverContractAddress: '0xc8E7060Cd790A030164aCbE2Bd125A6c06C06f69',
    intentSourceAddress: '0xa6B316239015DFceAC5bc9c19092A9B6f59ed905',
    inboxAddress: '0xfB853672cE99D9ff0a7DE444bEE1FB2C212D65c0',
    intentSource: {
      minimumDuration: 1000,
      counter: 0,
    },
    proving: {
      mechanism: provingMechanisms.bedrock,
      l1BlockAddress: '0x4200000000000000000000000000000000000015',
      l2l1MessageParserAddress: '0x4200000000000000000000000000000000000016',
      l2OutputOracleSlotNumber: 3,
      outputRootVersionNumber: 0,
      settlementChain: {
        network: 'mainnet',
        id: networkIds.mainnet,
        // L2 Output Oracle Address
        contract: '0x56315b90c40730925ec5485cf004d835058518A0',
      },
    },
    usdcAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    hyperlaneMailboxAddress: '0xeA87ae93Fa0019a82A727bfd3eBd1cFCa8f64f1D',
  },
  helix: {
    network: 'helix',
    chainId: networkIds.helix,
    proverContractAddress: '0x1486388b81cBc2E8a75A7055c8a5053D04301826',
    hyperProverContractAddress: '0x62e47c15BA93d5CfCF36c17cc1a2E5179616aa61',
    intentSourceAddress: '0xa6B316239015DFceAC5bc9c19092A9B6f59ed905',
    inboxAddress: '0xfB853672cE99D9ff0a7DE444bEE1FB2C212D65c0',
    intentSource: {
      minimumDuration: 1000,
      counter: 0,
    },
    proving: {
      mechanism: provingMechanisms.bedrock,
      l1BlockAddress: '0x4200000000000000000000000000000000000015',
      l2l1MessageParserAddress: '0x4200000000000000000000000000000000000016',
      l2OutputOracleSlotNumber: 3,
      outputRootVersionNumber: 0,
      settlementChain: {
        network: 'base',
        id: networkIds.base,
        // L2 Output Oracle Address
        contract: '0xf3B21c72BFd684eC459697c48f995CDeb5E5DB9d',
      },
    },
    usdcAddress: '0x44D5B1DacCB7E8a7341c1AE0b17Dc65a659B1aCA',
    hyperlaneMailboxAddress: '0x4B216a3012DD7a2fD4bd3D05908b98C668c63a8d',
  },
}

export { provingMechanisms, networkIds, intent, actors, networks }
