/**
 *
 * @Attention_1 : all addresses in this file should be in lowercase!!!!!!!!!
 * @Attention_2 : change Mumbai rpc URL to mainnet rpc URL before deployment, in HeroSection.tsx
 * @Attention_3 : change Mumbai chainId to mainnet chainId before deployment, BuySection.tsx
 * @Attention_4 : you should declare the minimum value of USDT in the smart contract as valid integer, 1, 22, 250
 */

/**
 * @note : HOW TO MODIFY WHITELIST ?
 * @Step 1 : grab your whitelist that is formated as a text line by line, each line contains an address, and convert it to lowercase in this website "https://convertcase.net/"
 * @Step 2 : copy the result and paste it in this website "http://static.decontextualize.com/lines-to-json/"
 * @Attention_1 : each time you time you modify the whitelist, you should redeploy the dapp
 * @Attention_2 : make sure that all addresses in the whitelist are in lowercase 
 */

 export const whitelist = [
  "0xcf2b38a21d528b3f498fbc7b1078a33deaa5e5ef",
  "0x6fa6da462cba635b0193809332387cdc25df3e8d",
  "0xa88f31c972b0ec5d43b415a1c3049119512b99e4",
  "0x0a50bca232b2c5691e3af8a9aec2c3738f45844a",
  "0x360795778e0be0e2af054a164e87f7d63660be46",
  "0x63e28494f0841edcea878b413018c0c8c40e6741",
  "0xcfe390af94d9fe687d7b81812d91c1bd87f8e65c",
  "0x060a25c1eb1b24b3e422aa8da1b2882c41616e68",
  "0xf9d775fc64dd3bbc107a65c9c1feb76e0549de00"
];
