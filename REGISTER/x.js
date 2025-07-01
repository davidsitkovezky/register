const password = document.getElementById("input1")
const passwordverify = document.getElementById("input2")
const submit = document.getElementById('submit')
const p = document.getElementById('p')
const checkbox = document.getElementById("checkbox")
const checkbox2 = document.getElementById('checkbox2')
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
    const trueornot =  passwordverify.value === password.value;
    const empty = password.value !== " ";
    if (trueornot && empty) {
        password.value = "";
        passwordverify.value = "";
        p.innerHTML = "sumbited!";
    } else {
        p.innerHTML = "something went wrong, please check the password again";
    }
})
