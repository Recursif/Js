/*
Basic Blockchain

with proof of work
*/


const SHA256 = require('crypto-js/sha256');

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}



class Block {
  constructor(timestamp, transactions, index, data, previousHash = '') {
    this.transactions = transactions;
    this.timestamp = timestamp;
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !==  Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log("Block mined :" + this.hash);
  }
}




class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 3;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block([], "01/01/2017", 0, "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  minePendingTransactions(miningRewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);

    console.log('Block successfully mined!');
    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward)
    ];
  }

  createTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }
    return balance;
  }


  isChainValid() {
    for (let i = 0; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
}

let jijicoin = new Blockchain();

jijicoin.createTransaction(new Transaction('address1', 'address2', 100));

jijicoin.createTransaction(new Transaction('address2', 'address1', 50));


console.log("Starting the miner...");

jijicoin.minePendingTransactions("jiji");

console.log("Balance of jiji: " + jijicoin.getBalanceOfAddress("jiji"));

console.log("Balance of address1: " + jijicoin.getBalanceOfAddress("address1"));

console.log("Balance of address2: " + jijicoin.getBalanceOfAddress("address2"));


console.log("Starting the miner...");

jijicoin.minePendingTransactions("jiji");

console.log("Balance of jiji: " + jijicoin.getBalanceOfAddress("jiji"));




/*
Code to mine block with POW

console.log('Mining block 1...');
jijicoin.addBlock(new Block(1, "10/03/2018", { amount: 4}));

console.log('Mining block 2...');
jijicoin.addBlock(new Block(2, "11/03/2018", { amount: 5}));

console.log(JSON.stringify(jijicoin, null, 4));
*/



/*
Code to check whether or not the chain is valid

console.log(JSON.stringify(jijicoin, null, 4));

console.log('Is chain valid?' + jijicoin.isChainValid());

jijicoin.chain[1].data = { amount: 100 };
jijicoin.chain[1].hash = jijicoin.chain[1].calculateHash();

console.log('Is chain valid? ' + jijicoin.isChainValid());
*/
