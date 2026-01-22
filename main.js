const upperletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", '"', ",", "<", ".", ">", "/", "?", "~", "`"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.querySelector(".random");

function generatePassword() {
    const length = +lengthEl.value;
    let charset = [];
    if (uppercaseEl.checked) {
        charset.push(...upperletters.slice(0, 26))
        
    }
    if (lowercaseEl.checked) {
        charset.push(...letters.slice(0, 26));
    }
    if (numbersEl.checked) {
        charset.push(...numbers);
    }

    if (symbolsEl.checked) {
        charset.push(...symbols);
    }

    let password1 = "";
    let password2 = "";

    for (let i = 0; i < length; i++) {
        const random1 = Math.floor(Math.random() * charset.length);
        const random2 = Math.floor(Math.random() * charset.length);
        password1 += charset[random1];
        password2 += charset[random2];
    }
    if (charset.length === 0) {
        window.alert("Please select at least one character type!");
        return;
    }
    if (length <= 0) {
        window.alert("Please enter a valid password length!");
        return;
    }
    if (password1 === "" && password2 === "") {
        password1El.textContent = "";
        password2El.textContent = "";
    }
    password1El.textContent = password1;
    password2El.textContent = password2;
    
    password1El.addEventListener("click", () => {
        navigator.clipboard.writeText(password1El.textContent)
            .then(() => alert("Password 1 copied!"))
            .catch(err => console.error(err));
    });

    password2El.addEventListener("click", () => {
        navigator.clipboard.writeText(password2El.textContent)
            .then(() => alert("Password 2 copied!"))
            .catch(err => console.error(err));
    });

}

generateEl.addEventListener("click", generatePassword);