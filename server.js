const moysklad = require("moysklad");
require('isomorphic-fetch');

const serv = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const corsOptions = {
    credentials: true, // This is important.
    origin: "*",
    methods:["POST","GET", "PUT", "DELETE", "OPTIONS"],
    headers:["X-Requested-With", "content-type"]
};


serv.use(bodyParser.json());
serv.use(bodyParser.urlencoded({extended: true}));
serv.use(cookieParser("HelloWorld"));
serv.use(cors(corsOptions));

const login = "admin@dima-0510";
const password = "794cdc36689b";
const ms = moysklad({
    login,
    password
});

serv.get("/entity/product", (req, res)=>{
    let limit = 25;
    let offset = 0;

    if (req.query.limit != null) {
        limit = req.query.limit;
    }
    if (req.query.offset != null) {
        offset = req.query.offset;
    }

    ms.GET("entity/product", {limit, offset}).then(require=>{
        const answer = {};
        answer.products = require.rows;
        answer.size = require.meta.size;
        res.json(answer);
    },err=>{
        res.error(err)
    });
});

serv.listen(5000, () => {
    console.log("server started");
});


//-------------------------------------
const express = require('express');
const app = require('express')();
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(favicon(__dirname + '/build/favicon.png'));
//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log("React app started");
});

//-------------------------------------
