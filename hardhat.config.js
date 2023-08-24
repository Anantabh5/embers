require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon_mumbai.g.alchemy.com/v2/wemvdcfY-KTd3DKF8a5lLiilnjddF_Xo",
      accounts: [`0x${"bc171a4b686f6b1564a1e5dea6f0a367f7c7b51e28ed44c6846174824d4ba61e"}`],
  },
},
}
