// document.getElementById('id').addEventListener('click',function(){})

// step-1: set even handler 
document.getElementById('button-login')
    .addEventListener('click', function (event) {

        // step-2: prevent reloading browser
        event.preventDefault();//<------ vejal to beginners;
        // console.log('login button click');



        // step-3: get the phone number 
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        // This is temporary,you should not like this;
        if (phoneNumber === '5' && pinNumber === '1234') {
            console.log('you are logged in');
            window.location.href = '/home.html';
        }
        else {
            alert('Wrong phone number or pin');
        }
    })