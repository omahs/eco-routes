// /* -*- c-basic-offset: 4 -*- */
// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

import "./interfaces/IIntentSource.sol";
import "./types/Intent.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

/**
 * This contract is the source chain portion of the Eco Protocol's intent system.
 *
 * It can be used to create intents as well as withdraw the associated rewards.
 * Its counterpart is the inbox contract that lives on the destination chain.
 * This contract makes a call to the prover contract (on the sourcez chain) in order to verify intent fulfillment.
 */
contract IntentSource is IIntentSource, EIP712 {
    bytes32 private immutable _INTENT_TYPEHASH =
        keccak256(
            "Intent(address creator,address target,bytes instructions, )"
        );
    // chain ID
    uint256 public immutable CHAIN_ID;

    // intent creation counter
    uint256 public counter;

    /**
     * minimum duration of an intent, in seconds.
     * Intents cannot expire less than MINIMUM_DURATION seconds after they are created.
     */
    uint256 public immutable MINIMUM_DURATION;

    // stores the intents
    mapping(bytes32 => Intent) public intents;

    /**
     * @param _name name of the protocol ("Eco Protocol" for now)
     * @param _version version of the protocol
     * @param _minimumDuration the minimum duration of an intent originating on this chain
     */
    constructor(
        string memory _name,
        string memory _version,
        uint256 _minimumDuration
    ) EIP712(_name, _version) {
        CHAIN_ID = block.chainid;
        MINIMUM_DURATION = _minimumDuration;
    }

    /**
     * @notice Creates an intent to execute instructions on a contract on a supported chain in exchange for a bundle of assets.
     * @dev If a proof ON THE SOURCE CHAIN is not completed by the expiry time, the reward funds will not be redeemable by the solver, REGARDLESS OF WHETHER THE INSTRUCTIONS WERE EXECUTED.
     * The onus of that time management (i.e. how long it takes for data to post to L1, etc.) is on the intent solver.
     * @dev The inbox contract on the destination chain will be the msg.sender for the instructions that are executed.
     * @param _destinationChain the destination chain
     * @param _targets the addresses on _destinationChain at which the instructions need to be executed
     * @param _callDatas the instruction sets to be executed on _targets
     * @param _rewardTokens the addresses of reward tokens
     * @param _rewardAmounts the amounts of reward tokens
     * @param _expiryTime the timestamp at which the intent expires
     */
    function createIntent(
        uint256 _destinationChain,
        address[] calldata _targets,
        bytes[] calldata _callDatas,
        address[] calldata _rewardTokens,
        uint256[] calldata _rewardAmounts,
        uint256 _expiryTime
    ) external {
        if (_expiryTime < block.timestamp + MINIMUM_DURATION) {
            revert ExpiryTooSoon();
        }
        if (
            _rewardTokens.length == 0 ||
            _rewardTokens.length != _rewardAmounts.length
        ) {
            revert RewardsMismatch();
        }

        bytes32 identifier = keccak256(abi.encode(counter, CHAIN_ID));

        intents[identifier] = Intent({
            creator: msg.sender,
            destinationChain: _destinationChain,
            targets: _targets,
            callDatas: _callDatas,
            rewardTokens: _rewardTokens,
            rewardAmounts: _rewardAmounts,
            expiryTime: _expiryTime
        });
        counter += 1;

        emitIntentCreated(identifier, intents[identifier]);
    }

    function emitIntentCreated(
        bytes32 _identifier,
        Intent memory _intent
    ) internal {
        //gets around Stack Too Deep
        emit IntentCreated(
            _identifier,
            msg.sender,
            _intent.destinationChain,
            _intent.targets,
            _intent.callDatas,
            _intent.rewardTokens,
            _intent.rewardAmounts,
            _intent.expiryTime
        );
    }

    function withdrawRewards(bytes32 _identifier) external {
        Intent storage intent = intents[_identifier];
    }
}
