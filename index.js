// import express from 'express';
// const express = require('express');
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

//req - Dados
//res - Para resposta

//get - post - delete - put
//get - acessar info
//post - Mandar/criar info
//delete - Apagar
//put - atualizar info
app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect(process.env.CONNECTIONSTRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
})
    .then(() => {
        console.log("conectei no banco de dados");
        app.listen(3000, () => {
            console.log('Acessar http://localhost:3000');
        });
    })
    .catch((e) => console.log(e));