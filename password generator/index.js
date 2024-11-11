let lowercasel = "qwertyuioplkjhgfdsazxcvbnm";
let uppercasel = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let numbersl = "1234567890";
let symbolsl = "  ~`@#$%^&*()_+}{|[]\\:'?><,./'";

let lengthel = document.getElementById("length");
let lowercasee1 = document.getElementById("lowercase");
let uppercasee1 = document.getElementById("uppercase");
let numberse1 = document.getElementById("numbers");
let symbolse1 = document.getElementById("symbols");
let passworde1 = document.getElementById("password"); // Corrected variable name
let button = document.getElementById("generate");

button.addEventListener("click", function(){

    let length = lengthel.value;
    let password = "";//nitially an empty string to hold the generated password.
    let character = "";// Initially an empty string to hold the set of characters that can be used to 

    if (lowercasee1.checked) {
        character += lowercasel;
        //If the checkbox for lowercase letters is checked (lowercasee1.checked),
        // the lowercase letters are added to the character string.
    }
    if (uppercasee1.checked) {
        character += uppercasel;
    }
    if (numberse1.checked) {
        character += numbersl;
    }
    if (symbolse1.checked) {
        character += symbolsl;
    }


    for(let i=0;i<length;i++){
       //generation of password
        password+=character.charAt(Math.floor(Math.random()*character.length))

        //explained in easiset way
        //A loop runs length times, each time selecting a random character from
        // the character string and appending it to the password string.
        //The charAt() method selects a character from the
        // character string at a random index generated using Math.random().
    }
    passworde1.value=password//genrated password is stored in passworde1
});
