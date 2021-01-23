
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
        this.Debit();//Method#4     
    };//End of the constructor

        // --------------------Methods Definition-------------
    OpeningAccount(){
            return this.OpeningDate;
        };//End of Method#1
    CloseAccount(){
        if (this.Balance <=1000){
            return 'Closed Account';}
            else {return 'Still Active Account';}
        };//End of Method#2
    Credit(){
        if (this.Balance>=40000){
            return 'You are eligible for $20K credits';}
            else {return 'You are NOT eligible for $20K credits'}
        };//End of Method#3
    Debit(){
        if (this.AccountStatus=='Active'){
            return 'Debit card still in access';}
            else {return 'Debit card out of access'}
        }//End of Method#4

}//End of the Class
