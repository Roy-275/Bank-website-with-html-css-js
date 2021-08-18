function getInput(idName) {
    const newInput = parseFloat(document.getElementById(idName).value);
    return newInput;
}

function getPreviousAmount(idName) {
    const previousAmount = parseFloat(document.getElementById(idName).innerText);
    return previousAmount;
}

function getPreviousTotal() {
    const previousTotal = parseFloat(document.getElementById('total-amount').innerText);
    return previousTotal;
}


// diposit button
document.getElementById('diposit-button').addEventListener('click', function () {
    document.getElementById('diposit-amount').innerText = getInput('diposit-input') + getPreviousAmount('diposit-amount');

    // update total Amount    
    document.getElementById('total-amount').innerText = getInput('diposit-input') + getPreviousTotal();
    document.getElementById('diposit-input').value = '';
});

// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    document.getElementById('withdraw-amount').innerText = getInput('withdraw-input') + getPreviousAmount('withdraw-amount');

    // update total Amount
    const displayedTotal = parseFloat(document.getElementById('total-amount').innerText);
    document.getElementById('total-amount').innerText = getPreviousTotal() - getInput('withdraw-input');
    document.getElementById('withdraw-input').value = '';
});