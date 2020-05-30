Date.test = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var akanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Ywa', 'Kofi', 'Kwame', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

function weekDay(dayNum) {
  return Date.test[dayNum.getDay()];
}

function naming(){
var yourName = document.forms["testForm"]["name"].value;
while (yourName == "") {
    alert("Name can't be left blank")
  }

var yourGender = document.forms["testForm"]["gender"].value;
while (youGender == "")  {
    alert("Please select your gender")

  }

var yourBirthDay = document.forms["testForm"]["birthDay"].value;
while (birthDay.split('-').length !== 3 ||
birthDay.split('-')[1].length !== 2 ||
birthDay.split('-')[1] > 12 ||
birthDay.split('-')[1] <= 0 ||
birthDay.split('-')[2].length !== 2 ||
birthDay.split('-')[2] > 31 ||
birthDay.split('-')[2] <= 0) {
alert("Invalid Date, Please enter your birthday in the format YYYY-MM-DD")
}
}
