const username = document.getElementById('username')
const hiddenshow1 = document.getElementById('hiddenshow1')
const usernamep = document.getElementById('usernamep')
const password = document.getElementById('password')
const hiddenshow2 = document.getElementById('hiddenshow2')
const passwordp = document.getElementById('passwordp')
const showall = document.getElementById('showall')
username.addEventListener('click', () => {
    hiddenshow1.style.display = "block";
    const usernamestorage = localStorage.getItem('username')
    usernamep.innerHTML = usernamestorage;
});
password.addEventListener('click', () => {
    hiddenshow2.style.display = "block";
    const passwordstorage = localStorage.getItem('password')
    passwordp.innerHTML = passwordstorage;
});
showall.addEventListener('click', () => {
    username.style.display = "block";
    password.style.display = "block";
})
function hide1() {
    if (username.style.display = "none") {
        hiddenshow1.style.display = "block";
        const usernamestorage = localStorage.getItem('username')
        usernamep.innerHTML = usernamestorage;
        username.innerHTML = "Hide accaunt user name";
    } else {
        hiddenshow1.style.display = "none"
    };
};
function hide2() {
    if (hiddenshow2.style.display = "none") {
        hiddenshow2.style.display = "block";
        const passwordstorage = localStorage.getItem('password')
        passwordp.innerHTML = passwordstorage;
        password.innerHTML = "Hide accaunt password"
    } else {
        hiddenshow2.style.display = "none";
    };
};
function hideall() {
    if ((username.style.display = "none") && (password.style.display = "none")) {
        username.style.display = "block";
        password.style.display = "block";
        showall.innerHTML = "hide accaunt info";
    }else{
        username.style.display = "none";
        password.style.display ="none";
    };
};