const express = require('express');
const request = require('request');
const app = express();

app.get('/api/flickr/request_token', (req, res) => {
  const flickrUrl = 'https://www.flickr.com/services/oauth/request_token?...';
  
  request(flickrUrl, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(body);
    }
  });
});

app.listen(3000, () => {
  // console.log('Server is running on port 3000');
});
