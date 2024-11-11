function calculateAge() {
    // Get the value of the input field
    var birthDateString = document.getElementById("dob").value; // Changed "birthDate" to "dob"
  
    // Create a Date object from the input string
    var birthDate = new Date(birthDateString);
  
    // Check if the birth date is valid
    if (isNaN(birthDate)) {
      alert("Please enter a valid date.");
      return;
    }
  
    // Get the current date
    var currentDate = new Date();
  
    // Calculate the difference in milliseconds
    var difference = currentDate - birthDate;
  
    // Convert the difference to years
    var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  
    // Display the result
    document.getElementById("result").innerHTML = "Your age is: " + age + " years";
}


// $(document).ready(function() {

//   var magic8Ball = {};
//   magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

//   $("#answer").hide();

//   magic8Ball.askQuestion = function(question) {
//     $("#8ball").effect("shake");

//     $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

//     $("#answer").fadeIn(4000);

//     var randomNumber = Math.random();

//     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

//     var randomIndex = Math.floor(randomNumberForListOfAnswers);

//     var answer = this.listOfAnswers[randomIndex];

//     $("#answer").text(answer);

//     console.log(question);
//     console.log(answer);
//   };

//   var onClick = function() {

//     $("#answer").hide();

//     $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");


//     setTimeout(function(){
//       var question = prompt("ASK A YES/NO QUESTION!");
//       magic8Ball.askQuestion(question);
//     }, 500);


//   };

//   $("#questionButton").click(onClick);

// });