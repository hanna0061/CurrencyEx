var registerForm=document.querySelector(".registerForm");
    registerForm.onsubmit=function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('exchange').value;
    let exchangeRate;

    if (currency === 'USD') {
        exchangeRate = 0.28;
    } else if (currency === 'JOD') {
        exchangeRate = 5.21;
    } else if (currency === 'ILS') {
        exchangeRate = 1;
    }

    const convertedAmount = (amount * exchangeRate).toFixed(2);
    document.getElementById('result').innerText = `${amount} ILS is approximately ${convertedAmount} ${currency}`;
}
