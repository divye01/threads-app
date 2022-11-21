const express = require('express');
const cors = require('cors');
const http = require("http");
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

let whitelist = ['http://localhost:3000', 'http://localhost:3001'];
let corsOptions = {
  origin: (origin, callback)=>{
      if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  },credentials: true
}
app.use(cors(corsOptions));

app.get('/', getPosts);


async function getPosts (request, response) {
  const apiResponse = await fetch('https://a.4cdn.org/po/2.json');
  const data = await apiResponse.json();
  return response.status(200).send(data.threads);
}

var server = app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);
