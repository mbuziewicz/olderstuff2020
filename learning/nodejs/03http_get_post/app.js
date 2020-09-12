/*
Making HTTP requests is a core functionality for modern languages and one of the first things many developers learn when acclimating to new environments. When it comes to Node.js there are a fair amount of solutions to this problem both built into the language and by the community. Let’s take a look at some of the most popular ones.

We’ll be using NASA’s Astronomy Picture of the Day API as the JSON API that we are interacting with in all of these examples because space is the coolest thing ever.
*/
//    https://api.nasa.gov/index.html#live_example


const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).url);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});