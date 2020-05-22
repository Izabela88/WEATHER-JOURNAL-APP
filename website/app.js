
// Global variables
let baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = "&appid=180c4ce4a37fad596d5885a0f60ac8c6";
const buttonClick = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//Chained promises
buttonClick.addEventListener('click', performAction);

function performAction(e) {
  const newZip = document.querySelector('#zip').value;
  const content = document.querySelector('#feelings').value;
  console.log(newZip, content)
  getWeather(baseUrl, newZip, apiKey)
    .then(function (data) {
      postData('/addData', {
        temperature: data.main.temp, date: newDate, content: content
      }).then(
        updateUI()
      )
    })
}

//Async GET
const getWeather = async (baseUrl, newZip, apiKey) => {

  const res = await fetch(baseUrl + newZip + apiKey)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Async POST
const postData = async (url = '', data = {}) => {
  console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log(error("error"));
  }
}

// Update UI
const updateUI = async () => {
  const request = await fetch('/all')
  try {
    const allData = await request.json()
    console.log(allData);
    document.querySelector('#date').innerHTML = "Date: " + allData[0].date;
    document.querySelector('#temp').innerHTML = "Current Temperature: " + allData[0].temperature;
    document.querySelector('#content').innerHTML = "I am feeling today: " + allData[0].content;
  } catch (error) {
    console.log("error", error)
  }
}