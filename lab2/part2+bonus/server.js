
let http = require('http');
let fs = require('fs')

let mainPageHtml = fs.readFileSync("./main.html").toString();
let cssFile = fs.readFileSync("./style.css").toString();
let scriptFile = fs.readFileSync("./script.js").toString();
let fetchFileJs = fs.readFileSync("./fetch.js").toString();
let welcomePage = fs.readFileSync("./welcome.html").toString();
let myIcon = fs.readFileSync("./favicon.ico")
let clientsJson = fs.readFileSync("./clients.json").toString()

let client = {
    
 }

 let users = [];

 
http.createServer(( request,response )=>{

    
    //#region get method
    if(request.method == 'GET'){
        
        switch(request.url){

            case "/main.html":
                response.setHeader("Access-Control-Allow-Origin","*")
                response.write(mainPageHtml);
            break;

            case "/style.css":
                response.writeHead(200,"Ok",{"content-type":"text/css"})
                response.write(cssFile)
            break;

            case "/script.js":
                response.writeHead(200,"Ok",{"content-type":"text/javascript"})
                response.write(scriptFile)
            break;

            case "/fetch.js":
                response.writeHead(200,"Ok",{"content-type":"text/javascript"})
                response.write(fetchFileJs)
            break;

            case "/favicon.ico":
                response.writeHead(200,"ok",{"content-type":"image/vnd.microsoft.icon"})
                response.write(myIcon)
            break;

            case "/clients.json":
                response.writeHead(200,"ok",{"content-type":"application/json"})
                response.write(clientsJson)
            break;

            default:
                response.write("<h1>No Page Found</h1>")
            break;
        }
        response.end();

    }
    //#endregion

    //#region post method
    else if(request.method == 'POST'){

        request.on("data",(data)=>{
            
            data = data.toString().split('&')
            client.username = data[0].split('=')[1];
            client.email = data[1].split('=')[1];
            client.address = data[2].split('=')[1];
            client.phone = data[3].split('=')[1];

            users.push(client);
            fs.writeFile('clients.json' , `${JSON.stringify(users)}`, ()=>{})
             
        })

        request.on("end",()=>{

            welcomePage = welcomePage.replace("{username}",client.username)
            // welcomePage = welcomePage.replace("{email}",client.email)
            // welcomePage = welcomePage.replace("{phone}",client.phone)
            // welcomePage = welcomePage.replace("{address}",client.address)
            response.write(welcomePage)
            response.end();

        })
    }
    //#endregion

}).listen('7000' , ()=>{
    console.log("http://localhost:7000")
})