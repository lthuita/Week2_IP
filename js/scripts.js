Date.test = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var akanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Ywa', 'Kofi', 'Kwame', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

function weekDay(dayNum) {
  return Date.test[dayNum.getDay()];
}

function naming() {
  //alert ("Hello World")
  var name = document.getElementById("name").value.toString();

  var gender = document.getElementById("gender").value.toString();

  var birthDay = document.getElementById("birthDay").value.toString();


  bday = birthDay.split('-');
  dayNum = new Date(bday)

  if (weekDay(dayNum) == "Sunday" && gender == "male")
    alert("Dear " + name + " your new name will be " + akanNames[0] + ".")
  else if (weekDay(dayNum) == "Monday" && gender == "male") {
    alert("Dear " + name + " your new name will be " + akanNames[1] + ".")
  } else if (weekDay(dayNum) == "Tuesday" && gender == "male") {
    alert("Dear " + name + " your new name will be " + akanNames[2] + ".")
  } else if (weekDay(dayNum) == "Wednesday" && gender == "male") {
    alert("Dear " + name + " your new name will be " + akanNames[3] + ".")
  } else if (weekDay(dayNum) == "Thursday" && gender == "male") {
    alert("Dear " + name + " your new name will be " + akanNames[4] + ".")
  } else if (weekDay(dayNum) == "Friday" && gender == "male") {
    alert("Dear " + name + " your new name will be " + akanNames[5] + ".")
  } else if (weekDay(dayNum) == "Saturday" && gender == "male") {
    alert("Dear " + name + " your new name will be " + akanNames[6] + ".")
  } else if (weekDay(dayNum) == "Sunday" && gender == "female") {
    alert("Dear " + name + " your new name will be " + akanNames[7] + ".")
  } else if (weekDay(dayNum) == "Monday" && gender == "female") {
    alert("Dear " + name + " your new name will be " + akanNames[8] + ".")
  } else if (weekDay(dayNum) == "Tuesday" && gender == "female") {
    alert("Dear " + name + " your new name will be " + akanNames[9] + ".")
  } else if (weekDay(dayNum) == "Wednesday" && gender == "female") {
    alert("Dear " + name + " your new name will be " + akanNames[10] + ".")
  } else if (weekDay(dayNum) == "Thursday" && gender == "female") {
    alert("Dear " + name + " your new name will be " + akanNames[11] + ".")
  } else if (weekDay(dayNum) == "Friday" && gender == "female") {
    alert("Dear " + name + " your new name will be " + akanNames[12] + ".")
  } else if (weekDay(dayNum) == "Saturday" && gender == "female") {
    alert("Dear " + name + " your new name will be " + akanNames[13] + ".")
  } else if (gender == "") {
    alert("You didnt select your gender")
  } else if (birthDay.split('-').length !== 3 ||
    birthDay.split('-')[1].length !== 2 ||
    birthDay.split('-')[1] > 12 ||
    birthDay.split('-')[1] <= 0 ||
    birthDay.split('-')[2].length !== 2 ||
    birthDay.split('-')[2] > 31 ||
    birthDay.split('-')[2] <= 0) {
    alert("Invalid Date, Please enter your birthday in the format YYYY-MM-DD")
  } else {
    alert("You entered wrong information")
  }
  alert("Thank you " + name + ".")
}

//}
//playAgain();

//naming();

//function playAgain() {
//if ((confirm("Do you want to play the game again?").toString()) == 'true') {
//  naming();
//} else {
//  alert("Thank you.")
//}
//}


//function SayHello(){ alert(“Hello”);}
