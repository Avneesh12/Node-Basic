// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end("<h1>This is Response</h1>");
// });

// server.listen(8000,"localhost",()=>{
//     console.log('Listing');
// })


// const server = http.createServer((req,res)=>{
//     res.end("<h1>This is Response</h1>");
// });

// server.listen(8000,"localhost")




// http.createServer((req,res)=>{
//     if(req.url =='/home'){
//         res.end("This is Home");
//     }else if(req.url == '/about'){
//         res.end("This is About Page");
//     }else{
//         res.writeHead(404,{"Content-type":"text/html"});
//         res.end("<h1>404 Error..!!</h1>");
//     }
// }).listen(3000,"localhost");