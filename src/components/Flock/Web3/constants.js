const DAIabi = require("./contracts/dai")
const rDAIabi = require("./contracts/rdai")

const CONTRACTS = {
  dai: {
    abi: DAIabi,
    kovan: "0xbF7A7169562078c96f0eC1A8aFD6aE50f12e5A99",
    homestead: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
  },
  rdai: {
    abi: rDAIabi,
    kovan: "0xea718e4602125407fafcb721b7d760ad9652dfe7",
    homestead: "0xea8b224eDD3e342DEb514C4176c2E72Bcce6fFF9",
  },
}
module.exports = CONTRACTS
