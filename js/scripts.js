Date.test = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var akanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Ywa', 'Kofi', 'Kwame', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

function weekDay(dayNum) {
  return Date.test[dayNum.getDay()];
