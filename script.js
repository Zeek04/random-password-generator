const passwordField = document.getElementById('password');
const generate = document.getElementById('generateButton');

generate.addEventListener('click', () => {

    const length = parseInt(document.getElementById('numberOfLetter').value);
    const numberToggle = document.getElementById('numberInPassword').checked;
    const symbolToggle = document.getElementById('symbolsInToggle').checked;

    function generatePassword(length, numberToggle, symbolToggle) {
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_-+=<>?/[]{}|";

        let characters = letters;
        if (numberToggle) characters += numbers;
        if (symbolToggle) characters += symbols;

        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        return password;
    }

    function displayPassword() {
        passwordField.innerText = generatePassword(length, numberToggle, symbolToggle);
    }

    displayPassword();
});
