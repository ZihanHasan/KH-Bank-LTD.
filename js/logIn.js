document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField =  document.getElementById('user-email');
    const email = emailField.value;
    
    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    if(email === 'hasanzihan77@gmail.com' && pass === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
})