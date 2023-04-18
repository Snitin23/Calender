let monthContainer = document.querySelector('.month');
let dayContainer = document.querySelector('.day');
let dateContainer = document.querySelector('.date');
let yearContainer = document.querySelector('.year');

let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December']
let dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


let date = new Date()

monthContainer.innerHTML = monthName[date.getMonth()]
dayContainer.innerHTML = dayName[date.getDay()]
dateContainer.innerHTML = dateName[date.getDate()]
yearContainer.innerHTML = yearName[date.getFullYear()]


let month = date.getMonth()
let day = date.getDay()
let todaysdate = date.getDate()
let year = date.getFullYear()

