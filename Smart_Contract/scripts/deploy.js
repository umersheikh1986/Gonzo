const hre = require("hardhat");
const Owner = "0x8D7df39af8CEd4bE71BF3777Bb738ec2f04806AA";   
async function main() {
  // Gonzo
  const Gozno = await ethers.getContractFactory("Gozno");
  const gozno = await Gozno.deploy( 20000000 , Owner);
  // USDT
  const USDT = await ethers.getContractFactory("BEP20DAI");
  const usdt = await USDT.deploy(Owner);

  // Sales contract 
  const SaleContract = await ethers.getContractFactory("SaleContract");
  const saleContract = await SaleContract.deploy(gozno.target,usdt.target,Owner);
  console.log(`gozno:  ${gozno.target}, usdt:  ${usdt.target},saleContract: ${saleContract.target}`);
  
  hre.run("verify:verify",{
    address: gozno.target,
    contract: "contracts/GonzoToken.sol:Gozno", //Filename.sol:ClassName
    constructorArguments: [Owner],
  })

  hre.run("verify:verify",{
    address: usdt.target,
    contract: "contracts/Dai.sol:BEP20DAI", //Filename.sol:ClassName
    constructorArguments: [Owner],
  })


  hre.run("verify:verify",{
    address: saleContract.target,
    contract: "contracts/PreSale.sol:SaleContract", //Filename.sol:ClassName
    constructorArguments: [gozno.target,usdt.target, Owner],
  })
 
  

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*
  this is deployed GC41
  USDT:  0x636d315a7094c1F6B571DE167B24203E0fEeA3Dd, MLM: 0x7798Ba4CAe5005252EdA0b2168aCE3407D666Ba2
  for elseiv : 
  0xd2F437CBC6d2F9083F69671d9F956905f4e489b0
*/