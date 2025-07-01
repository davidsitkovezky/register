const total = document.getElementById('total');
const plus1button = document.getElementById('plus1button')
plus1button.addEventListener('click', () => {
    total.innerText = parseInt(total.innerText) + 1;
    console.log("1 added to total")
});
const restart = document.getElementById('restart');
restart.addEventListener('click', () => {
    total.innerText = 0;
    console.log("total was restarted");
});