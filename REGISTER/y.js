const username = document.getElementById('Username')
const password = document.getElementById('Password')
const loginbutton = document.getElementById('login')
const checkbox = document.getElementById('checkbox')
const text = document.getElementById('text')
function loginfunction() {
    const userNameVal = username.value;
    const passWordVal = password.value;
    const usernameStorage = localStorage.getItem("username")
    const passwordStorage = localStorage.getItem("password")
    if (userNameVal === usernameStorage && passWordVal === passwordStorage) {
        text.innerHTML = "login successful";
        username.Value = "";
        password.Value = "";
    } else {
        text.innerHTML = "please check username or password";
    };
}
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    };
});