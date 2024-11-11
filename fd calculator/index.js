function calculatematurityamount(){

    let principle=parseFloat(document.querySelector("#principle").value);
    let interestrate=parseFloat(document.querySelector("#interest").value);
    let years=parseFloat(document.querySelector("#years").value);

    let maturityamount=principle+(principle*interestrate*years)/100;


    let result=document.querySelector(".result");
    result.innerHTML=`maturity amout is ${maturityamount}`;
    //inculdes tags and other formats thats innerhtml is ude instead of text

   

}

let calculate=document.querySelector(".btn1");
calculate.addEventListener('click',calculatematurityamount)




//WHY PARSEFLOAT AND VALUES ARE USED:
//In JavaScript, values retrieved from form elements such as input fields (<input>) are returned as strings by default. This means that if you try to perform mathematical operations directly on these values, JavaScript may concatenate them as strings rather than adding or multiplying them as numbers.

//To ensure that you're working with numerical values, you need to convert
 //these strings to numbers. The parseFloat() function converts a string into a
 // floating-point number (a number that may have a fractional part).

//The .value property of a form element retrieves the current value of 
//the element. However, this value is returned as a string.
 //Therefore, when you retrieve values from form fields, you typically
 // use .value to get the string representation of the value and then use 
  //parseFloat() or parseInt() to convert it to a numerical value if needed.