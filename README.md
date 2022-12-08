## This is a temporary README

### How To Use for YPredict Developers  Only, Announcement!!! MOVED TO Mainnet

## 🛠 Installation & Set Up

1. Clone the repo CLI

   ```sh
   git clone https://github.com/hktitof/Ypredict.git
   ```


2. Install dependencies

   ```sh
   yarn
   ```
3. make sure you have Polygon Mumbai Testnet in your MetaMask Network list, follow the following URL if you don't have it.

    ```sh
   https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f
   ```
   
4.  add your wallet to whitelist in the file "config/whitelist/whitelist.ts", make sure your wallet address declared as lowercase in the constant "whitelist".

   ```sh
   config/whitelist/whitelist.ts
   ```
     
 5.  add USDC to your wallet to your wallet, and get 100 USDC for testing purposes, first of all add this address "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747" to your asset in wallet "MetaMask", make sure you choose Mumbai Testnet, then click on claim in the following contract, you should have some matic to get USDC, by connecting your wallet .

   ```sh
   https://mumbai.polygonscan.com/address/0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747#writeProxyContract
   ```
6. you are good to go and run Development

   ```sh
   yarn dev
   ```
