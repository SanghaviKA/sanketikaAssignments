const http =require ('http');
const { stringify } = require('querystring');

 const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.write('Hello');
        res.end();
    
    }
    if(req.url == '/api/module/'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
 });
 server.listen(5000);
 console.log("server is running on port 5000")