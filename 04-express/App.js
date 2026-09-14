const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;
//EPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))// for serving static files
app.use(express.urlencoded())// for parsing application/x-www-form-urlencoded

// set the template engine as pug
app.set('view engine', 'pug');  

// set the views directory
app.set('views', path.join(__dirname, 'views')); 

// ENDPOINTS
app.get('/', (req, res)=>{
    const con="This is the best content on the internet so far so use it wisely";
    const params={'title':'pubg is the best game', 'content':con};
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite, 'utf-8');

    const params = {'title': 'pubg is the best game'};
    res.status(200).render('index.pug', params);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});