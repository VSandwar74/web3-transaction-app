require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ndXq_pH5xZVubUwMkmxXLn0pMneiAuf8',
      accounts: [ '426a4f8e1a31f9a4ed2cb029949e84c242087252f38f2d84b2a392585a64260d' ]
    }
  }
}