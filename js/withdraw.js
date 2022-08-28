document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const newwithdrawAmount = getInputValueById('withdraw-amount');
   
    const previouswithdrawAmount = getPreviousValueById('withdraw-total');

    const newTotal = newwithdrawAmount + previouswithdrawAmount;

    setTextValuebyId('withdraw-total', newTotal);

    const PreviousBalanceTotal = getPreviousValueById('balance-total');
    const newBalance = PreviousBalanceTotal - newwithdrawAmount;
    setTextValuebyId('balance-total', newBalance);

})