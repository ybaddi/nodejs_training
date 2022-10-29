const express = require('express');
const app = express();
const personne_route = require('./src/personne/personne.route');
// const adresse_route = require('./src/adresse/adresse.route');


app.use(express.json());
app.use('/personnes', personne_route);
// app.use('/adresse', adresse_route);

app.all('/home', (req,res) => {
    res.status('200')
        .send("menu du home");
});


app.all('/*', (req,res) => {
    res.status('200')
        .send("menu du home from *");
});

app.listen(3000, () => {
    console.log('serveur started');
});

//
// const connection = require('./database');
//
// const query = connection.query("select * from personnes", (err,res)=> {
//     console.log(query.sql);
//     console.log(res);
// })
