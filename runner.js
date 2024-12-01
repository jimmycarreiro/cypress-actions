const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIyNDdlNjY1LWZmZjktNDhiOS1iODU1LWY0ZTllYTIzZDdlMi0xNzMzMDgyMzU1MDg2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2IxNTc3NWMtNWM1ZS00ZDVlLTgzN2YtMmUwZDc4OTg5Y2EyIiwidHlwZSI6InQifQ.KjA5FnodXm5OA7QwiyL8Gijjdm-5GZoxnM2Po1w3YJw'


cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'token',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
