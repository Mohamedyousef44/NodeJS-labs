

// prepare files to be done

const fs = require('fs')

const http = require('http');

http.createServer((request , response)=>{

    let urls = (request.url).split('/');

    urls.shift();

    let op = urls.shift();

    let nums = urls.map(Number)
    
    if(request.url != '/favicon.ico'){
        
        fs.appendFile('results.txt' , `result of your operation is ${operations(op , nums)} \r\n`  , ()=>{})
        
        response.writeHead(200 ,{ 'Content-Type': 'text/html' }).end(`<h1>result of your operation is ${operations(op , nums)}<h1>`);

    } 
})
.listen('7000' , ()=>{
    console.log('hi from my server')
})



// function of calculator depends on opearator

function operations(op , nums){

    let result = 0 ;

    switch(op){

        case 'sum':

            result = nums.reduce((x,y)=> x+y)
            break;

        case 'sub':

            result = nums.reduce((x,y)=> x-y)
            break;

        case 'div':

            result = nums.reduce((x,y)=> x/y)
            break;

        case 'mul':

            result = nums.reduce((x,y)=> x*y)
            break;

    }

    return result ;
}