
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
        if (this.AccountStatus == 'Active'){
            return 'Still Active';}
            else {return 'Closed Account';}
        };//End of Method#2
    Credit(){
        if (this.Balance>=40000){
            return 'YES';}
            else {return 'NO'}
        };//End of Method#3
    Debit(){
        if (this.Balance <=10){
            return 'NO';}
            else {return 'YES'}
        }//End of Method#4

}//End of the Class
