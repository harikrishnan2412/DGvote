// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Election {
    struct candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }
    mapping(uint256 => candidate) public candidates;
    uint256 public candidatesCount;
    mapping(address => bool) public voters;

    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = candidate(candidatesCount, _name, 0);
    }

    function vote(uint256 _candidateId) public {
        require(!voters[msg.sender], "You can only vote Once");  
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        candidates[_candidateId].voteCount++;
    }

    function getCandidate(
        uint256 _candidateId
    ) public view returns (uint256, string memory, uint256) {
        return (
            candidates[_candidateId].id,
            candidates[_candidateId].name,
            candidates[_candidateId].voteCount
        );
    }
}