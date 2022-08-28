document.getElementById('btn-deposit').addEventListener('click',function(){
    
    const newDepositAmount = getInputValueById('deposit-amount');
   
    const previousDepositAmount = getPreviousValueById('deposit-total');

    const newTotal = newDepositAmount + previousDepositAmount;

    setTextValuebyId('deposit-total', newTotal);

    const PreviousBalanceTotal = getPreviousValueById('balance-total');
    const newBalance = PreviousBalanceTotal + newDepositAmount;
    setTextValuebyId('balance-total', newBalance);

})