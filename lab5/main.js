
//#region configs

const express = require('express');
const app = new express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const studentRouter = require('./Routes/studentRoutes');
const courseRouter = require('./Routes/courseRoutes');

//#endregion

//#region middlewares

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//#endregion

//#region student routers

app.use('/api/student' , studentRouter)

//#endregion

//#region courses routers

app.use('/api/course' , courseRouter)

//#endregion


app.listen( PORT , ()=>{console.log('http://localhost:' + PORT)})