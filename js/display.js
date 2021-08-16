// diposit button
document.getElementById('diposit-button').addEventListener('click', function () {
    const inputDipositAmount = parseFloat(document.getElementById('diposit-input').value);
    const displayedDipositAmount = parseFloat(document.getElementById('diposit-amount').innerText);
    document.getElementById('diposit-amount').innerText = inputDipositAmount + displayedDipositAmount;
    document.getElementById('diposit-input').value = '';

    // update total Amount
    const displayedTotal = parseFloat(document.getElementById('total-amount').innerText);
    document.getElementById('total-amount').innerText = inputDipositAmount + displayedTotal;
});

// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputWithdrawAmount = parseFloat(document.getElementById('withdraw-input').value);
    const displayedWithdrawAmount = parseFloat(document.getElementById('withdraw-amount').innerText);
    document.getElementById('withdraw-amount').innerText = inputWithdrawAmount + displayedWithdrawAmount;
    document.getElementById('withdraw-input').value = '';

    // update total Amount
    const displayedTotal = parseFloat(document.getElementById('total-amount').innerText);
    document.getElementById('total-amount').innerText = displayedTotal - inputWithdrawAmount;
});

