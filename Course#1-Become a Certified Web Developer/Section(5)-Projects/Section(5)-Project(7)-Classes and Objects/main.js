
class Bank {
    constructor(AccountNumber, Balance, AccountType, OpeningDate, AccountStatus) {
        //----------------------Properties---------------------
        this.AccountNumber = AccountNumber;
        this.Balance = Balance;
        this.AccountType = AccountType;
        this.OpeningDate = OpeningDate;
        this.AccountStatus = AccountStatus;
        //----------------------Methods---------------------
        this.OpeningAccount();//Method#1
        this.CloseAccount();//Method#2
        this.Credit();//Method#3
        
            
            // bank.prototype.Credit = function () { },
            // bank.prototype.Debit = function () { };
    };//End of the constructor
        // -----------------------Methods Definition---------------------
    OpeningAccount(){
            return this.OpeningDate;
        };
    CloseAccount(){
        if (this.Balance <=1000){
            return 'Closed Account';}
            else { return 'Still Active Account';}
    };
    Credit(){
        if (this.Balance>=40000){
            console.log('Eligible for $20K credits')

        }

    }


}
