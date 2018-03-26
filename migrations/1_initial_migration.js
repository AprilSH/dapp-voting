//Migration file 
//->reference point for creating own migration
//*migration files are numbered so truffle would know

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
