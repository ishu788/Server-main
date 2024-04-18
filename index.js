
const port =  5000;
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');

const db = require("./Db")
const BookModel = require("./ModelSchema/BookModel");
const bookRoute = require("./Services/BooksServices")

app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

app.use(bookRoute);

app.listen(port, ()=> {
    console.log(`server running on ${port}`);
});