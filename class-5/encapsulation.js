class BankAccount{
    name;
    balance;

    constructor(accountHolder, initialBalance){
        this.name = accountHolder;
        this.balance = initialBalance;
    }

    getBalance = () => {
		return this.balance;
	};

    deposit = (amount) => {
		if (amount > 0) {
			this.balance += amount;
			return `Deposited ${amount} dollars. \nNew balance: ${this.balance} dollars.`;
		} else {
			return "Invalid deposit amount.";
		}
	};

    withdraw = (amount) => {
		if (amount > 0 && amount <= this.balance) {
			this.balance -= amount;
			return `Withdrawn ${amount} dollars. \nNew balance: ${this.balance} dollars.`;
		} else {
			return "Invalid withdrawal amount or insufficient funds.";
		}
	};
}

const acc1 = new BankAccount("Alice", 1000);
const acc2 = new BankAccount("Bob", 500);
console.log(acc1.getBalance());
console.log(acc2.deposit(200));
console.log(acc2.withdraw(700));