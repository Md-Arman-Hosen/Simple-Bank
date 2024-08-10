document.getElementById('btn-submit').addEventListener('click',function(){
 
    const emailField = document.getElementById('inputEmailField');
    const email = emailField.value ;
    console.log(email);

    const PasswordField = document.getElementById('inputPasswordField');
    const password = PasswordField.value ;
    console.log(password);

    if(email==='bank@gmail.com' && password ==='12345'){
        window.location.href= 'bank.html';
    }
    else{
        alert('Input Valid Email Or Password');
    }
})