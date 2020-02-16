const ethers = require("ethers")
const CONTRACTS = require("./constants")
require("babel-polyfill")

const { parseUnits, formatUnits } = ethers.utils

class Web3Utils {
  async unlockWallet() {
    if (!this.isWeb3EnabledBrowser()) {
      return { hasWallet: false, isUnlocked: false }
    }
    let walletAddress = ""
    try {
      window.ethereum.autoRefreshOnNetworkChange = false
      walletAddress = await window.ethereum.enable()
      localStorage.setItem("walletAddress", walletAddress[0])

      const walletProvider = new ethers.providers.Web3Provider(
        window.web3.currentProvider
      )
      const network = await walletProvider.getNetwork()
      return {
        hasWallet: true,
        isUnlocked: true,
        walletAddress: walletAddress[0],
        network,
        walletProvider,
      }
    } catch (error) {
      if (typeof window.ethereum === "undefined") {
        return { hasWallet: false, isUnlocked: false }
      }
      // eslint-disable-next-line no-console
      return {
        hasWallet: true,
        isUnlocked: false,
        error: this.getErrorResponse(error, "unlockWallet"),
      }
    }
  }

  async loadContracts({
    walletProvider,
    contractNames,
    allowancesRequested,
    balancesRequested,
  }) {
    console.log("lol")

    try {
      ethers.errors.setLogLevel("error") // "debug", "default", "info", "warn", "off"
      const loadedContracts = {}
      const { name: networkName } = await walletProvider.getNetwork()
      contractNames.forEach(name => {
        loadedContracts[name] = new ethers.Contract(
          CONTRACTS[name][networkName],
          CONTRACTS[name].abi,
          walletProvider.getSigner()
        )
      })

      const owner = await walletProvider
        .listAccounts()
        .then(accounts => accounts[0])

      let allowancesObj
      if (allowancesRequested) {
        const allowances = await this.getAllowances({
          contracts: loadedContracts,
          owner,
          allowancesRequested,
        })
        allowancesObj = allowances
      }
      const balances = await this.getBalances({
        contracts: loadedContracts,
        balancesRequested,
        owner,
      })
      // eslint-disable-next-line no-console
      console.log(
        `Loaded contracts ${Object.keys(loadedContracts)} on ${networkName}`
      )
      return { contracts: loadedContracts, allowances: allowancesObj, balances }
    } catch (error) {
      return this.getErrorResponse(error, "loadContracts")
    }
  }

  async approve(tokenContract, owner, spender, amount, allowUnlimitedApprove) {
    try {
      // TODO: get decimal value, rather than hardcoded 18
      let amount_BN = parseUnits(amount, 18)
      // TODO: add an argument to make optional isApprovalNeeded()
      const approvalNeeded = await this.isApprovalNeeded(
        tokenContract,
        owner,
        spender,
        amount_BN
      )
      if (approvalNeeded.error) {
        throw approvalNeeded.error
      } else if (approvalNeeded) {
        if (allowUnlimitedApprove) amount_BN = parseUnits(500000, 18)
        const tx = await tokenContract.approve(spender, amount_BN)
        return {
          approvalComplete: false,
          tx,
        }
      }
      return {
        approvalComplete: true,
      }
    } catch (error) {
      return this.getErrorResponse(error, "approve")
    }
  }

  async isApprovalNeeded(tokenContract, owner, spender, amount_BN) {
    try {
      // Todo, perform check if BN and convert if Needed
      // Remove the BN conversion from Step 3
      // console.log(owner, spender)
      const allowance_BN = await tokenContract.allowance(owner, spender)
      console.log("Allowance: ", formatUnits(allowance_BN, 18))
      console.log("Approval needed: ", amount_BN.gt(allowance_BN))
      return amount_BN.gt(allowance_BN)
    } catch (error) {
      return this.getErrorResponse(error, "isApprovalNeeded")
    }
  }

  async generateRDAI({ rtokenContract, amount, recipients, proportions }) {
    try {
      const amount_BN = await parseUnits(amount, 18)
      const tx = await rtokenContract.mintWithNewHat(
        amount_BN,
        recipients,
        proportions
      )
      return {
        tx,
      }
    } catch (error) {
      return this.getErrorResponse(error, "generateRDAI")
    }
  }

  async getAllowances({ contracts, owner, allowancesRequested }) {
    try {
      const tokenContracts = allowancesRequested.tokens.map(
        tokenName => {
          return contracts[tokenName]
        }
        // TODO add error handling for contract/allowance mismatch
      )

      const spenderAddressList = allowancesRequested.spenders.map(
        spenderName => {
          if (
            spenderName.search(/0x[0-9a-bA-z]{40}/) > 0 ||
            spenderName.search(/.eth/) > 0
          ) {
            return spenderName // return ENS or raw address
          }
          return contracts[spenderName].address
        }
      )
      const allowances = {}
      // console.log(tokenContracts)
      for (let i = 0; i < tokenContracts.length; i++) {
        const contract = tokenContracts[i]
        const name = allowancesRequested.tokens[i]
        for (let j = 0; j < spenderAddressList.length; j++) {
          const spender = spenderAddressList[i]
          let allowance
          try {
            allowance = await contract.allowance(owner, spender)
          } catch (error) {
            allowance = {
              error: `Error getting allowance: ${error.message}`,
            }
          }
          const allowanceObj = {
            [allowancesRequested.spenders[j]]: allowance,
          }
          allowances[name] = allowanceObj
        }
      }

      return allowances
    } catch (error) {
      console.log(error)
      return this.getErrorResponse(error, "getAllowances")
    }
  }

  async getBalances({ contracts, owner, balancesRequested }) {
    console.log(balancesRequested)
    try {
      const balances = {}
      if (balancesRequested && balancesRequested.length > 0) {
        for (let i = 0; i < balancesRequested.length; i++) {
          const tokenName = balancesRequested[i]
          const contract = contracts[tokenName]
          balances[tokenName] = await contract.balanceOf(owner)
        }
      }
      return balances
    } catch (error) {
      console.log(error)
      return this.getErrorResponse(error, "getBalances")
    }
  }
  // ////////////////////
  // Internal Functions

  isWeb3EnabledBrowser() {
    return (
      typeof window !== "undefined" && typeof window.ethereum !== "undefined"
    )
  }

  getErrorResponse(error, functionName) {
    const res = {
      message: `Error web3Utils.${functionName}(): ${error.message}`,
    }
    if (error.code) {
      res.code = error.code
      switch (error.code) {
        case 4001:
          res.txError = "aborted"
          break
        case -32016:
          res.txErrorType = "exception"
          break
        default:
          res.txErrorType = "unknown error type"
      }
    }
    return { error: res }
  }
}

module.exports = Web3Utils
