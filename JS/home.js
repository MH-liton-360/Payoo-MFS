document.getElementById('btn-addMoney')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoneyInput = document.getElementById('input-add-money').value;


        // get the pin number 
        const pinCheckInput = document.getElementById('pin-check').value;

        console.log(addMoneyInput, pinCheckInput);


        if (pinCheckInput === '1234') {
            console.log('adding money your account');

            // get the current balance 
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance)

            // add addMoneyInput with balance 
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);

            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            // Update balance 
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Failed to add money! please try again.');
        }

    })
