var user = {}

var trueresponses = [];
var falseresponses = [];


function question1() {
  
  var name = prompt('What is your name?')
  user.name = name
}

question1();


function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

  if (firstQuestion.toLowerCase() === 'yes') {
   
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    
    firstQuestion = false
  } else {

    alert("Please answer either Yes or No");
    return question2();
  }

  if ( firstQuestion = true) {

    trueresponses.push(1)
  } else {

    falseresponses.push(1)
  }
}

question2();


function question3() {
  
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  
  js = js.toLowerCase();
  
  switch (js) {
    
    case "java":
      js = true
    break;

    case "livescript":
      js = false
    break;

    case "javalive":
      js = false
    break;

    case "scriptyscript":
      js = false
    break;

    default:
      prompt("Answer with one of the four options")
    break;
  }
  
  if (js = true) {

    trueresponses.push(1)
  } else {

    falseresponses.push(1)
  }
}

question3();


function showResults() {

  console.log("You have " + trueresponses.length + " well answers");
  console.log("You have " + falseresponses.length + " bad answers");
}


console.log(user);

showResults();