const signInform = document.getElementById('sign-in-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById ('email');
const passwordInput = document.getElementById('password');
const countrySelect = document.getElementById('iktar');

signInform.addEventListener('submit', function(e) {
    e.preventDefault();


    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const country = countrySelect.value;

    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('username',username);
    localStorage.setItem('userEmail',email);
    localStorage.setItem('userCountry',country);

    alert("اهلا بك يا "+username+"تم تسجيل دخولك بنجاح ") 

    window.location.href= 'salla.html';
    signInform.reset();
})

