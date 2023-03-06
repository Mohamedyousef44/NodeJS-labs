
let client = {
    
}

let users = [];
var PORT = process.env.PORT || '7000' ;
const express = require('express');
var fs = require('fs');
var path = require('path');
let welcomeHtml = fs.readFileSync('./welcome.html').toString();

var options = {
    root: path.join(__dirname)
};

const app = new express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//#region get method
app.get('/main.html' , (req , res)=>{

    var fileName = 'main.html' ;
    res.sendFile( fileName , options)

 })

app.get('/style.css' , (req , res)=>{

    var fileName = 'style.css' ;
    res.sendFile( fileName , options)

 })

app.get('/script.js' , (req , res)=>{

    var fileName = 'script.js' ;
    res.sendFile( fileName , options)

})

app.get('/welcome.html' , (req , res)=>{

    var fileName = 'welcome.html' ;
    res.sendFile( fileName , options)

})

app.get('/clients.json' , (req , res)=>{

    var fileName = 'clients.json' ;
    res.sendFile( fileName , options)

})
app.get('/favicon.ico' , (req , res)=>{

    var fileName = 'favicon.ico' ;
    res.sendFile( fileName , options)

})
app.get('/fetch.js' , (req , res)=>{

    var fileName = 'fetch.js' ;
    res.sendFile( fileName , options)

})
//#endregion

//#region post method

app.post('/welcome.html' ,(req , res)=>{

    client.username = req.body.userName;
    client.email = req.body.email;
    client.address = req.body.address;
    client.phone = req.body.phone;

    users.push(client);
    fs.writeFile('clients.json' , `${JSON.stringify(users)}`, ()=>{});
    welcomeHtml = welcomeHtml.replace("{username}",client.username);
    res.sendFile('/welcome.html' , options)

});

//#endregion 

 app.listen(PORT,()=>{console.log("http://localhost:7000")});
