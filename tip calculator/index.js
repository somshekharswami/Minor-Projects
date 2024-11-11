// function calculatetip(){

//      bill=parseFloat(document.getElementById("amount").value);

//     let percent=parseFloat(document.getElementById("tip").value);

//     let tipAmount=bill * (percent/100);
//     let totalAmount1=tipamount + bill;

//     let result1=document.getElementById("tip-amount");
//     result1.textContent=`$`+ tipAmount.toFixed(2);
//     let result2=document.getElementById("total-amount");
//     result2.textContent=`$`+totalAmount1.toFixed(2);

// }

// let button=document.getElementById("btn");
// button.addEventListener("click",calculatetip);

function calculateTip(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Your existing code to calculate tip amount and total amount
    let bill = parseFloat(document.getElementById("amount").value);
    let percent = parseFloat(document.getElementById("tip").value);
    let tipAmount = bill * (percent / 100);
    let totalAmount = tipAmount + bill;

    let result1 = document.getElementById("tip-amount");
    result1.textContent = "$" + tipAmount.toFixed(2);
    let result2 = document.getElementById("total-amount");
    result2.textContent = "$" + totalAmount.toFixed(2);
}

// Get the button element
let button = document.getElementById("btn");

// Add an event listener to the button for the "click" event
button.addEventListener("click", calculateTip);
