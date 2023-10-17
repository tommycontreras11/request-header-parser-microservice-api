const express = require('express');
const app = express();

app.listen(3000);

app.get('/api/whoami', (req, res) => {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        res.json({
            ipaddress: data.ip,
            language: req.headers["accept-language"],
            software: req.headers["user-agent"]
        })
    })
    .catch(error => {
      console.error('Error fetching public IP:', error);
    });
})

app.set('trust proxy', true);