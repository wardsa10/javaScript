class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  depositing(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return "deposit ";
      console.log(`deposit: ${amount}`);
      
    }
    console.log('you have to put positive amount');
    return
    
  }

  withdrawing(amount) {
    if (amount < this.#balance)
    {
      this.#balance -= amount
    
      console.log(`withdraw:${amount}`);
      return
    }
 console.log(
   "you have to withdraw money under your balance ")
    return
  }



  getBalance() {
  return this.#balance
}

  
  
}

const account = new BankAccount("Ali", 1000)
account.withdrawing(150)

console.log(account.getBalance());
