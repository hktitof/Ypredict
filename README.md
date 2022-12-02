### How To Use for Developers Only

## 🛠 Installation & Set Up

1. Clone the repo CLI

   ```sh
   git clone https://github.com/hktitof/my-website.git
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```
  4. make sure you have Polygon Mumbai Testnet in your MetaMask Network list, follow the following URL if you don't have it.

    ```sh
   https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f
   ```
   
 5.  add your wallet to whitelist in the file "config/whitelist/whitelist.ts", make sure your wallet address declared as lowercase in the constant "whitelist"

   ```sh
   config/whitelist/whitelist.ts
```
     
 6.  add & get USDC to your wallet for testing purposes, first of all add this address "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747" to your asset in wallet make sure you choose Mumbai Testnet, then click on claim in the following contract, you should have some matic to get USDC .

   ```sh
   https://mumbai.polygonscan.com/address/0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747#writeProxyContract
   ```
7. run Development

   ```sh
   yarn dev
   ```
