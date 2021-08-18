// Common Function 
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputAmountText = inputValue.value ;
    const inputAmount = parseFloat(inputAmountText);

    // Clear the input field
    inputValue.value = '';

    return inputAmount;
}

function updateTotalField(totalInputId,depositAmount){
    const totalElement = document.getElementById(totalInputId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText =previousTotal + depositAmount;

}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();

    if(isAdd== true){
        balanceTotal.innerText = previousBalanceTotal + amount ;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount ;
    }

}
// Deposit button handler 
document.getElementById('deposit-button').addEventListener('click',function(){
    // Getting the input 
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value ;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount =getInputValue('deposit-input');
    if(depositAmount > 0 ){

    //adding the amount in deposit section
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);


    // depositTotal.innerText =previousDepositTotal + depositAmount;

    updateTotalField('deposit-total',depositAmount);

    //Update the total money
    // const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal + depositAmount ;
    updateBalance(depositAmount,true);

    // // Clear the input field
    // depositInput.value = '';
    }
});


// Withdraw button handler 
document.getElementById('withdraw-button').addEventListener('click',function(){
    // Getting the input 
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value ;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount> 0 && withdrawAmount< currentBalance ){

    //adding the amount in deposit section
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);


    // withdrawTotal.innerText =previousWithdrawTotal + withdrawAmount;
    updateTotalField('withdraw-total',withdrawAmount);

    //Update the total money
    // const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount ;
    updateBalance(withdrawAmount,false);

    // // Clear the input field
    // withdrawInput.value = '';
    }
});