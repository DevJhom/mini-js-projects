const container = document.querySelector('.container');
const firstRow = document.querySelector('.first-row');
const secondRow = document.querySelector('.second-row');
const thirdRow = document.querySelector('.third-row');
const spaceBar = document.querySelector('.space-bar');

const keys = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","space-bar"];

createKeyboard();

function createKeyboard() {
    keys.forEach((key, idx) => {

        const keyEl = document.createElement('p');
        keyEl.innerText = key;
        keyEl.id = key

        if(idx < 10)
            firstRow.appendChild(keyEl)
        else if(idx > 9 && idx < 19)
            secondRow.appendChild(keyEl)
        else if(idx > 18 && idx < 26)
            thirdRow.appendChild(keyEl)
        else if(idx > 25){
            keyEl.innerHTML = " "
            spaceBar.appendChild(keyEl)
        }
    })
}

//getting user input
window.addEventListener('keydown', (e) => {
    const enteredKey = e.key;

    keys.forEach(key => {
        if(enteredKey === key) 
            animateKeyboard(key);
        else if(enteredKey === " ")
        animateKeyboard('space-bar')
    })
})

//set CSS class to 'typed-in'
function animateKeyboard(key){
    const enteredKeyEl = document.getElementById(key)
    enteredKeyEl.classList.add('typed-in')

    setTimeout(() => {
        enteredKeyEl.classList.remove('typed-in')
    }, 1000)
}