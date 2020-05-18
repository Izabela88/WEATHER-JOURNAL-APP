

let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
let apiKey = ` 16d67f159034ecf5a73a18ba63ee15fa`;
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


// Async GET
const getData = async (url = '') => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const Data = await request.json()
    return data;
  }
  catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// Async POST
const postData = async (url = '', data = {}) => {
  console.log(data);
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
    return newData
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}



// API KEY 16d67f159034ecf5a73a18ba63ee15fa
