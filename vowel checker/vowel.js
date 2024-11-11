function checkvowels() {
    let text = document.getElementById("inputtext").value;
    let  vowelcount = 0;

    text = text.toLowerCase();

    for (let  i = 0; i < text.length; i++) {
        let  char = text.charAt(i);//index value stored in char 0,1,2,3
        if (isvowel(char)) {
            vowelcount++;
        }
    }
    let result = document.getElementById("result");
    result.textContent = "Total vowels: " + vowelcount;
}

function isvowel(char) {
    let  vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}

let button = document.getElementById("btn");
button.addEventListener("click", checkvowels);