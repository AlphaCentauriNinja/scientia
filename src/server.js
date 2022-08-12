const express = require('express');

require('dotenv').config()

// CONTROLLERS

const loadTester = require('./controllers/performance/loadtest');

const linkChecker = require('./controllers/seo/linkinator')
const lighthouseChecker = require('./controllers/seo/lighthouse2')


const vulnerabilityChecker = require('./controllers/security/vulnerability')

// SET EXPRESS APP
const app = express();



// CONSTANTS
const PORT = process.env.SERVER_PORT;

// ROUTES
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

// SERVER

app.listen(PORT, (error) => {

    const urlSite = 'https://www.example.com';

    // loadTester.getLoadResults(urlSite, 10)

    // linkChecker.linkCheck(urlSite)

    // vulnerabilityChecker.vulnerabilityCheck(urlSite)

    lighthouseChecker.lighthouseCheck(urlSite);


    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)

    else
        console.log("Error occurred, server can't start", error);
}



);