document.getElementById('btn-addMoney')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoneyInput = document.getElementById('input-add-money').value;


        // get the pin number 
        const pinCheckInput = document.getElementById('pin-check').value;

        console.log(addMoneyInput, pinCheckInput);

    })
