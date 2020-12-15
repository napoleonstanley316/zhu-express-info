// give us ENTIRETY OF express NOT  ./
const express = require('express');

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS Javascript
app.use(express.static('server/public'))

// SERVE DATA
const people = ['Gabin', 'Josh', 'Joe'];

app.get('/data', (req, res) => {
    console.log('you got to /data!');
    // ALL SERVER REQUESTS NEED A RESPONSE
    res.send(people) // send people array back to client
});


// START UP SERVER
// hey app, start listening on this port and let me know when you do (console.log)
app.listen(PORT, () => {
    // this will run when server starts
    console.log('server running on PORT', PORT);

});

