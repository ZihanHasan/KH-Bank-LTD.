function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value; 
    const inputFieldValueNumber = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldValueNumber;
}

function getPreviousValueById(previousTotalId){
    const previousValue = document.getElementById(previousTotalId);
    const previousAmount = previousValue.innerText;
    const previousAmountNumber = parseFloat(previousAmount);
    return previousAmountNumber;
}

function setTextValuebyId(previousTotalId, newValue){
    const previousValue = document.getElementById(previousTotalId);
    previousValue.innerText = newValue;
}