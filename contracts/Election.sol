pragma solidity ^0.4.11;

contract Election{
    //Model a Candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }//(instantiate then assign it to a variable)

    //Store Candidates
    //Fetch Candidate
    mapping(uint => Candidate) public candidates;//associative array or hash--way to store candidates
    //Store Candidates Count
    uint public candidatesCount;// default value of uint is 0
    //^counter for the mapping --- a way to keep track how many candidates exist and be able to iterate through it

    

    function Election() public { //constructor will run whenever the contract is initialized/deployed
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string _name) private { 
        // _name -- with underscore to be known as a local variable
        candidatesCount ++; //increment syntax for sol
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);//Candidate(id, name, initial value for voteCount)

    }

}