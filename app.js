const express = require("express");
const bodyParser=require('body-parser')
const path = require("path");
const connectMongoDb = require('./Server/connectMongoDb');
const todoRouter=require('./routes/Todo')
const dotenv = require('dotenv')

// app init
const app = express();

// dot env
dotenv.config()

// Server connection mongoose
connectMongoDb();



// view engine for ejs/html
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// use to read json text data through thirdy part middleware body-parser
app.use(bodyParser.urlencoded({extended :true}))

// add router
app.use('/' , todoRouter)

module.exports=app;