function getInputValue(value) {
    const inputText = document.getElementById(value);
    const amount = parseFloat(inputText.value);
    inputText.value = '';
    return amount;
}

function getAmount(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const previousAmount = parseFloat(totalField.innerText);
    const newTotal = amount + previousAmount;
    totalField.innerText = newTotal;
    return newTotal;
}
function getCurrentBalance() {
    const balanceText = document.getElementById('balance-text');
    const balanceValue = parseFloat(balanceText.innerText);
    return balanceValue;
}

function getTotalBalance(amount, shakil) {
    const balanceText = document.getElementById('balance-text');
    const balanceValue = parseFloat(balanceText.innerText);
    if (shakil == true) {
        balanceText.innerText = balanceValue + amount;
    }
    else {
        balanceText.innerText = balanceValue - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    /* const inputText = document.getElementById('input-text');
    const inputValue = parseFloat(inputText.value); */
    const inputValue = getInputValue('input-text');
    if (inputValue > 0) {
        getAmount('deposit-text', inputValue);
        getTotalBalance(inputValue, true);
    }
    /* const depositText = document.getElementById('deposit-text');
    const depositValue = parseFloat(depositText.innerText);
    const depositTotal = inputValue + depositValue;
    depositText.innerText = depositTotal; */


    /* const balanceText = document.getElementById('balance-text');
    const balanceValue = parseFloat(balanceText.innerText);
    const balanceTotal = balanceValue + inputValue;
    balanceText.innerText = balanceTotal; */


    // inputText.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawValue = parseFloat(inputWithdraw.value); */
    const withdrawValue = getInputValue('input-withdraw');
    const currentBalance = getCurrentBalance();
    if (withdrawValue > 0 && withdrawValue <= currentBalance) {
        getAmount('withdraw-text', withdrawValue);
        getTotalBalance(withdrawValue, false);
    }
    /* const withdrawText = document.getElementById('withdraw-text');
    const withdrawAmount = parseFloat(withdrawText.innerText);
    const withdrawTotal = withdrawValue + withdrawAmount;
    withdrawText.innerText = withdrawTotal; */


    /* const balanceText = document.getElementById('balance-text');
    const balanceValue = parseFloat(balanceText.innerText);
    const balanceTotal = balanceValue - withdrawValue;
    balanceText.innerText = balanceTotal; */


    // inputWithdraw.value = '';
});