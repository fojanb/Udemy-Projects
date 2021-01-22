
class Bank {
    constructor(AccountNumber, Balance, AccountType, OpeningDate, AccountStatus) {
        //Properties:
        this.AccountNumber = AccountNumber;
        this.Balance = Balance;
        this.AccountType = AccountType;
        this.OpeningDate = OpeningDate;
        this.AccountStatus = AccountStatus;

        //Methods:
        Bank.prototype.OpenAccount= function(){
            if (this.AccountNumber != "") {
                alert(this.AccountNumber);
            }}
        
            // bank.prototype.CloseAccount = function () { },
            // bank.prototype.Credit = function () { },
            // bank.prototype.Debit = function () { };

    }
}