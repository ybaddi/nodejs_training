const express = require('express');
const app = express();

// meddlewares
const middleware = (req,res,next)=>{
    console.log("hello from middleware with url " + req.url );
    next();
}


// URLS
app.get('/', (request, response,next) => {
    console.log('url /');
    response.send('Hello World: page racine!');
    next();
},middleware);
app.post('/home', (request, response,next) => {
    console.log('url /home');
    response.set('Content-Type', 'text/plain')
    response.send('Hello World: home page!');
    next();
},middleware);

app.get('/login', (request, response,next) => {
    console.log('url /home');
    response.send(`Bonjour ${request.query['prenom']} ${request.query['nom']}`);
    response.send('Hello World: home page!');
    next();
},middleware);

// app.use();
// Server start
app.listen(3000,() =>
    console.log('Adresse du serveur : http://localhost:3000')
);
