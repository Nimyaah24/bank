// create account-register a new account
function register(){

    // 1 fetch the values from the html
    acno=reg_acno.value
    uname=reg_name.value
    pswd=reg_pswd.value

    console.log(acno,uname,pswd);

    // 2 create accnodetails objects
    accountDetails={
        acno,
        uname,
        pswd,
        balance:0
    }
    // 3 check if acno is already present in the 
    if(acno in localStorage){
        alert("user already registered")
    }
    // to set details in local storage
    else{
        localStorage.setItem(acno,JSON.stringify(accountDetails))
        alert("registration successful")
        // redirect to login page
        window.location="./login.html"
    }
}

//login

function login(){
    // 1 fetch account details
    acno=login_acno.value
    pswd=login_pswd.value
    console.log(acno,pswd);

    // 2 check if the account number is present in localstorage
    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno))
        if(pswd==accountDetails.pswd){
            alert("login successful")
            window.location="./home.html"
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("invalid account number")
    }
}

// deposite
let amnt=0;
let withdraw=0;
let totalBalance=0;
function depositeMoney(){
    amnt=deposite_amnt.value;
    acno=deposite_acno.value;
    amnt=Math.floor(amnt);
    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if(acno==accountDetails.acno&&amnt<=0){
            alert("value cannot be empty or negative")
        }
        else{
            accountDetails.balance+=amnt;
            //alert(accountDetails.balance)
            localStorage.setItem(acno,JSON.stringify(accountDetails));
            alert("your amount is successfully added")
            document.getElementById("balance_amount").innerHTML=`<div style="color:light;"font-weight:500">your current balance ${accountDetails.balance} </div>`
        }
    }
    else{
        alert("incorrect account no")
    }
}

// withdraw
function Withdraw(){
    withdraw=withdraw_amnt.value;
    acno=withdraw_acno.value;
    withdraw= Math.floor(withdraw);
    
    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if(acno==accountDetails.acno && withdraw <= 0){
            alert("Please enter the amount")
        } else if ( withdraw > accountDetails.balance){
            alert("Insufficient funds...!")
        } else{
            alert("Bank Balance before withdrawal: " + accountDetails.balance)

            alert("withdrawal amount: " + withdraw)

            accountDetails.balance -= withdraw;
            alert("Your amount is  successfully withdrawn")
            localStorage.setItem(acno, JSON.stringify(accountDetails));
            
          
            alert("After withdrawal balance : " + accountDetails.balance) 
            document.getElementById("Withdraw_amnt").innerHTML=`<div class="text-light" style="font-weight:800">Your Current Balance ${accountDetails.balance} </div>`;
     
        }
    } else{
        alert("Incorrect Password");
    }
   
}
function logout() {
    localStorage.clear()
    window.location="./index.html";
}