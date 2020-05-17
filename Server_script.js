const moysklad = require("moysklad");
require('isomorphic-fetch');

const app = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const corsOptions = {
    credentials: true, // This is important.
    origin: "*",
    methods:["POST","GET", "PUT", "DELETE", "OPTIONS"],
    headers:["X-Requested-With", "content-type"]
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser("HelloWorld"));
app.use(cors(corsOptions));

const login = "admin@dima-0510";
const password = "794cdc36689b";
const ms = moysklad({
    login,
    password
});

app.get("/entity/product", (req, res)=>{
    let limit = 25;
    let offset = 0;


    if (req.query.limit != null) {
        limit = req.query.limit;
    }
    if (req.query.offset != null) {
        offset = req.query.offset;
    }

    ms.GET("entity/product", {limit, offset}).then(require=>{
        res.json(require.rows);
    },err=>{
        res.error(err);
    });
});

app.listen(5000, () => {
    console.log("server started");
});
