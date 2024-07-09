/* eslint-disable no-magic-numbers */
export default {
  sepolia: {
    layer: 1,
    role: ['Settlement'],
    network: 'sepolia',
    chainId: 11155111,
    l2BaseOutputOracleAddress: '0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254',
    l2OptimismDisputeGameFactory: '0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1',
  },
  optimismSepolia: {
    layer: 2,
    role: ['Source', 'Destination'],
    network: 'optimism-sepolia',
    chainId: 11155420,
    l1BlockAddress: '0x4200000000000000000000000000000000000015',
    proverContractAddress: '0x97EEd05007Dd68F6bC108db38e6F683adfAED96C',
    intentSourceAddress: '0x6B79cD3fE2Eccd3a69c52e621a81d26E75983787',
    inboxAddress: '0x8831967844AA280E8F0Ac47977AdB4d947BAE536',
    l2l1MessageParserAddress: '0x4200000000000000000000000000000000000016',
    usdcAddress: '0x5fd84259d66Cd46123540766Be93DFE6D43130D7',
  },
  baseSepolia: {
    layer: 2,
    role: ['Source', 'Destination'],
    network: 'base-sepolia',
    chainId: 84532,
    l1BlockAddress: '0x4200000000000000000000000000000000000015',
    proverContractAddress: '0xD680eF529AA9340ba8754157Fc06055f18E3a151',
    intentSourceAddress: '0x2b16FD1Bd15d1cC73f50B8780cE8D82bcc835f17',
    inboxAddress: '0x5d0cab22a8E2F01CE4482F2CbFE304627d8F1816',
    l2l1MessageParserAddress: '0x4200000000000000000000000000000000000016',
    usdcAddress: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
  },
  mainnet: {
    layer: 1,
    role: ['Settlement'],
    network: 'mainnet',
    chainId: 1,
    l2BaseOutputOracleAddress: '0x56315b90c40730925ec5485cf004d835058518A0',
  },
  optimism: {
    layer: 2,
    role: ['Source'],
    network: 'optimism',
    chainId: 10,
    l1BlockAddress: '0x4200000000000000000000000000000000000015',
    proverContractAddress: '0xb42d852beE31e810018f311653d2cC4ce7993c6D',
    intentSourceAddress: '0x2e8C9a05804b0Ff497C71950E2Ddd506AcDd602b',
    usdcAddress: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
  },
  base: {
    layer: 2,
    role: ['Destination'],
    network: 'base',
    chainId: 8453,
    inboxAddress: '0xf820639A8508cbA7E9F2C26FC43e61b2342A25B3',
    l2l1MessageParserAddress: '0x4200000000000000000000000000000000000016',
    usdcAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  },
  noncePacking: 1,
  intentSourceCounter: 100,
  l2OutputOracleSlotNumber: 3,
  l2OutputVersionNumber: 0,
  actors: {
    deployer: '0x6cae25455BF5fCF19cE737Ad50Ee3BC481fCDdD4',
    intentCreator: '0x448729e46C442B55C43218c6DB91c4633D36dFC0',
    solver: '0x7b65Dd8dad147C5DBa896A7c062a477a11a5Ed5E',
    claimant: '0xB4e2a27ed497E2D1aD0C8fB3a47803c934457C58',
    prover: '0x923d4fDfD0Fb231FDA7A71545953Acca41123652',
    recipient: '0xC0Bc9bA69aCD4806c4c48dD6FdFC1677212503e9',
  },
  intent: {
    creator: '0x448729e46C442B55C43218c6DB91c4633D36dFC0',
    destinationChainId: 84532,
    recipient: `0xC0Bc9bA69aCD4806c4c48dD6FdFC1677212503e9`,
    targetTokens: [`0x036CbD53842c5426634e7929541eC2318f3dCF7e`],
    targetAmounts: [1241],
    rewardTokens: ['0x5fd84259d66Cd46123540766Be93DFE6D43130D7'],
    rewardAmounts: [1242],
    duration: 3600,
  },
  mainnetIntent: {
    creator: '0x448729e46C442B55C43218c6DB91c4633D36dFC0',
    destinationChainId: 8453,
    recipient: `0xC0Bc9bA69aCD4806c4c48dD6FdFC1677212503e9`,
    targetTokens: [`0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`],
    targetAmounts: [1241],
    rewardTokens: ['0x0b2c639c533813f4aa9d7837caf62653d097ff85'],
    rewardAmounts: [1242],
    duration: 7200,
    intentHash:
      '0x17dd658e22dcf93f30391abe0407a1f3cbd05b408183b1ef70dd8111fb2c8942',
    intentFulfillTransaction:
      '0x7a751a7fa00a6c702f04f64958958852de479bb4e05bf8fe09450e7dc8dc29d8',
  },
}
