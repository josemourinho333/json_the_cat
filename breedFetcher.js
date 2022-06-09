const request = require('request');
const searchThisBreed = process.argv.slice(2);
const requestUrl = 'https://a pi.thecatapi.com/v1/breeds/search?q=' + searchThisBreed;

request(requestUrl, (error, response, body) => {
  if (error) {
    return console.log('Error:', error.code);
  }

  if (data.length < 1) {
    return console.log('Breed name is not found, try again');
  }

  const data = JSON.parse(body);
  return console.log(data[0].description);
});