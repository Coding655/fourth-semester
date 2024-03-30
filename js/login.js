document.getElementById('btn-clicked').addEventListener('click', function(){
    const emailField = document.getElementById('inputEmail');
    const email = emailField.value;
    const passField = document.getElementById('inputPass');
    const pass = passField.value;
    if(email === 'imransirajee@gmail.com' && pass === 'password'){
        window.location.href='main-page.html'
    }
    else{
        alert('WRONG PASSWORD');
    }

})