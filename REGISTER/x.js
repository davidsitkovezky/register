const password = document.getElementById("input1")
const passwordverify = document.getElementById("input2")
const submit = document.getElementById('submit')
const p = document.getElementById('p')
const checkbox = document.getElementById("checkbox")
const checkbox2 = document.getElementById('checkbox2')
const username = document.getElementById('name')
const loginbutton = document.getElementById('login')
const trueornot = passwordverify.value === password.value;
const empty = password.value !== "";
const empty2 = username.value !== "";
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        password.type = 'Text';
    } else {
        password.type = 'password';
    };
});
checkbox2.addEventListener('change', () => {
    if (checkbox2.checked) {
        passwordverify.type = 'text';
    } else {
        passwordverify.type = "password";
    };
});
submit.addEventListener('click', () => {
    if (password.value === passwordverify.value && password.value !== "" && username.value !== "") {
        localStorage.setItem("password", password.value);
        localStorage.setItem("username", username.value);
        password.value = "";
        passwordverify.value = "";
        p.innerHTML = "submitted!";
        username.value = "";
        loginbutton.style.display = "block";
        p.style.fontWeight = "bold";
    } else {
        p.innerHTML = "something went wrong, please check the password again";
    };
});