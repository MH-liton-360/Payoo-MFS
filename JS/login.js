// document.getElementById('id').addEventListener('click',function(){})

// step-1: set even handler 
document.getElementById('button-login')
    .addEventListener('click', function (event) {

        // step-2: prevent reloading browser
        event.preventDefault();//<------ vejal to beginners;
        console.log('login button click');



        // step-3: get the phone number 
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);
    })