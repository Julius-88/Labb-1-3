const path = require('path');
const express = require('express');
const app = express();
let counter = 0;
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/add/:num", (req, res) => {
    const {
        num
    } = req.params;
    console.log(typeof num);
    counter += Number(num);
    res.send({ success: true });
});

app.get("/api/show", (req, res) => {
    res.send({
        counter
    });
});

app.get("/api/reset", (req, res) => {
    counter = 0;
    res.send({ success: true });
});


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/api/random', (req, res) => {
    res.json({ Number: Math.floor(Math.random() * (1023 - 0) + 1) });
    // let Number = Math.random() * number;
    // res.send('' + Number);
});
// localhost:3000/api/custom_random/100
app.get('/api/custom_random/:num', (req, res) => {
    const { num } = req.params;
    res.json({ Number: Math.floor(Math.random() * num) });

}); // ska ge ett nummer? Vad betyder num? 

app.get('/api/customer', (req, res) => {
    res.json({ firstName: 'Julius', lastName: 'DragonHeart', age: 32 });
});


// app.get('/random-number', function (req, res) {
//     res.type('text/plain');
//     let randomnumber = Math.random();
//     res.send('' + randomnumber);
// });

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});

// Följt https://betterprogramming.pub/build-a-simple-web-server-using-node-js-and-express-27f3d6eb4e86 För G nivå i Labb 1.
// fått inspiration för end point ett och två via följande sidor, samt för större förståelse på hur saker fungerar för VG nivå i Labb 1. 
//https://stackoverflow.com/questions/46541701/how-to-write-a-rest-api-for-nodejs-to-return-a-random-number/46545079
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
// https://stackoverflow.com/questions/33609404/node-js-how-to-generate-random-numbers-in-specific-range-using-crypto-randomby
//https://www.youtube.com/watch?v=dIhGddkSMpU
//https://stackoverflow.com/questions/40556650/generate-random-number-with-node-js-page
//https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express


//har även tittat på tutorial från NetNinja samt Web Developer i Udemy. Dock inte sett klart allt. 
// Jag har även bollat idéer med klasskompisar. 

