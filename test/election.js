var Election  = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    //all accounts in the development environment will be injected/included when the contract has been declared

    //test if the contract was initialized with the correct number of candidates
    it("initializes with two candidates", function(){
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });

    //test if candidates are initialized with correct value
    it("it initializes the candidates with the correct values", function(){
        return Election.deployed().then(function(instance))
        electionInstance = instance;
        return electionInstance.candidates(1);
    }).then(function(candidate){
        assert.equal(candidate[0], 1, "contains the correct id");
        assert.equal(candidate[1], "Candidate 1", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct count of votes");
        return electionInstance.candidates(2);
    }).then(function(candidate){
        assert.equal(candidate[0], 2, "contains the correct id");
        assert.equal(candidate[1], "Candidate 2", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct count of votes");
    });

});