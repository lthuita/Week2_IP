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
while (yourBirthDay.split('-').length !== 3 ||
yourBirthDay.split('-')[1].length !== 2 ||
yourBirthDay.split('-')[1] > 12 ||
yourBirthDay.split('-')[1] <= 0 ||
yourBirthDay.split('-')[2].length !== 2 ||
yourBirthDay.split('-')[2] > 31 ||
yourBirthDay.split('-')[2] <= 0) {
alert("Invalid Date, Please enter your birthday in the format YYYY-MM-DD")
}
}

bday = yourBirthDay.split('-');
dayNum = new Date(bday)

if (weekDay(dayNum) == "Sunday" && yourGender == "male")
  alert("Dear " + yourName + " your new name will be " + akanNames[0] + ".")
else if (weekDay(dayNum) == "Monday" && yourGender == "male") {
  alert("Dear " + yourName + " your new name will be " + akanNames[1] + ".")
} else if (weekDay(dayNum) == "Tuesday" && yourGender == "male") {
  alert("Dear " + yourName + " your new name will be " + akanNames[2] + ".")
} else if (weekDay(dayNum) == "Wednesday" && yourGender == "male") {
  alert("Dear " + yourName + " your new name will be " + akanNames[3] + ".")
} else if (weekDay(dayNum) == "Thursday" && yourGender == "male") {
  alert("Dear " + yourName + " your new name will be " + akanNames[4] + ".")
} else if (weekDay(dayNum) == "Friday" && yourGender == "male") {
  alert("Dear " + yourName + " your new name will be " + akanNames[5] + ".")
} else if (weekDay(dayNum) == "Saturday" && yourGender == "male") {
  alert("Dear " + yourName + " your new name will be " + akanNames[6] + ".")
} else if (weekDay(dayNum) == "Sunday" && yourGender == "female") {
  alert("Dear " + yourName + " your new name will be " + akanNames[7] + ".")
} else if (weekDay(dayNum) == "Monday" && yourGender == "female") {
  alert("Dear " + yourName + " your new name will be " + akanNames[8] + ".")
} else if (weekDay(dayNum) == "Tuesday" && yourGender == "female") {
  alert("Dear " + yourName + " your new name will be " + akanNames[9] + ".")
} else if (weekDay(dayNum) == "Wednesday" && yourGender == "female") {
  alert("Dear " + yourName + " your new name will be " + akanNames[10] + ".")
} else if (weekDay(dayNum) == "Thursday" && yourGender == "female") {
  alert("Dear " + yourName + " your new name will be " + akanNames[11] + ".")
} else if (weekDay(dayNum) == "Friday" && yourGender == "female") {
  alert("Dear " + yourName + " your new name will be " + akanNames[12] + ".")
} else {
  alert("Dear " + yourName + " your new name will be " + akanNames[13] + ".")
}
