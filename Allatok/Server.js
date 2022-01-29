const http = require("http");
const url = require("url");
const fs = require("fs");
let date_ob = new Date();
const ip2 = '192.168.0.108';
const ip1 = '25.50.38.47';
const port = 3000;
const hamachi = false;

if(hamachi)
{
  const server1 = http.createServer((req, res) => {
    //handle the request and send back a static file
    let parsedURL = url.parse(req.url, true);
    //remove the leading and trailing slashes
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    if (path == "") {
      path = "Html/Main.html";
    }

    let H = date_ob.getHours();
    let M = date_ob.getMinutes();
    //let S = date_ob.getSeconds();

    console.log("\x1b[33m" + H+':'+M + " On " + ip1+':'+port + ` REQUESTED path ${path} ` + "\x1b[0m");
  
    let file = path;
    //async read file function uses callback
    fs.readFile(file, function(err, content) {
      if (err) {
        console.log("\x1b[31m"+ H+':'+M +" On " +ip1+':'+port + ` File Not Found ${file}`+"\x1b[0m");
        fs.readFile('Html/NoPage.html', function(err, content){
          if (err) {
            console.log("\x1b[31m"+ H+':'+M +" On " +ip1+':'+port + ' File Not Found Html/NoPage.html '+"\x1b[0m");
            res.writeHead(404);
          }
          else
          {
            console.log("\x1b[32m" + H+':'+M + ' On ' + ip1 + ':' + port + ` RETURNING Html/NoPage.html`+"\x1b[0m");
            res.writeHead(404,{ "Content-type": "text/html" });
          }
          res.end(content);
        });
  
      } else {
        //specify the content type in the response
        console.log("\x1b[32m" + H+':'+M + ' On ' + ip1 + ':' + port + ` RETURNING ${path}`+"\x1b[0m");
        res.setHeader("X-Content-Type-Options", "nosniff");
  
        switch (path) {
          case "Css/Animals.css":
             res.writeHead(200, { "Content-type": "text/css" });
             break;
             case "../Index.html":
               res.writeHead(200, { "Content-type": "text/html" });
               break;
               case "Html/Halak.html":
                 res.writeHead(200, { "Content-type": "text/html" });
                 break;
                 case "Html/Hullok.html":
              res.writeHead(200, { "Content-type": "text/html" });
              break;
              case "Html/Keteltuek.html":
                res.writeHead(200, { "Content-type": "text/html" });
                break;
                case "Html/Madarak.html":
                  res.writeHead(200, { "Content-type": "text/html" });
                  break;
                  case "Html/Emlosok.html":
                    res.writeHead(200, { "Content-type": "text/html" });
              break;
              case "Html/NoPage.html":
                res.writeHead(200, { "Content-type": "text/html" });
                break;
              case "Html/Eredeti.html":
                res.writeHead(200, { "Content-type": "text/html" });
                break;
                
              }
              res.end(content);
      }
    });
  });
  
  server1.listen(port, ip1, () => {
    console.log("Listening on " + ip1 + ":" + port);
  });
}

const server = http.createServer((req, res) => {
  //handle the request and send back a static file
  let parsedURL = url.parse(req.url, true);
  //remove the leading and trailing slashes
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  if (path == "") {
    path = "Html/Main.html";
  }

  let H = date_ob.getHours();
  let M = date_ob.getMinutes();
  //let seconds = date_ob.getSeconds();

  console.log("\x1b[33m" + H+':'+M + " On " + ip2+':'+port + ` REQUESTED path ${path} ` + "\x1b[0m");

  let file = path;
  //async read file function uses callback
  fs.readFile(file, function(err, content) {
    if (err) {
      console.log("\x1b[31m" + H+':'+M + " On " +ip2+':'+port + ` File Not Found ${file}`+"\x1b[0m");
      fs.readFile('Html/NoPage.html', function(err, content){
        if (err) {
          console.log("\x1b[31m" + H+':'+M + "  On " +ip2+':'+port + ' File Not Found Html/NoPage.html '+"\x1b[0m");
          res.writeHead(404);
        }
        else
        {
          console.log("\x1b[32m" + H+':'+M + '  On ' + ip2 + ':' + port + ` RETURNING Html/NoPage.html`+"\x1b[0m");
          res.writeHead(404,{ "Content-type": "text/html" });
        }
        res.end(content);
      });

    } else {
      //specify the content type in the response
      console.log("\x1b[32m" + H+':'+M + ' On ' + ip2 + ':' + port + ` RETURNING ${path}`+"\x1b[0m");
      res.setHeader("X-Content-Type-Options", "nosniff");

      switch (path) {
        case "Css/Animals.css":
           res.writeHead(200, { "Content-type": "text/css" });
          break;
        case "Index.html":
            res.writeHead(200, { "Content-type": "text/html" });
            console.log("---");
            break;
        case "Html/Halak.html":
            res.writeHead(200, { "Content-type": "text/html" });
            break;
        case "Html/Hullok.html":
            res.writeHead(200, { "Content-type": "text/html" });
            break;
        case "Html/Keteltuek.html":
            res.writeHead(200, { "Content-type": "text/html" });
            break;
        case "Html/Madarak.html":
            res.writeHead(200, { "Content-type": "text/html" });
            break;
        case "Html/Emlosok.html":
            res.writeHead(200, { "Content-type": "text/html" });
            break;
        case "Html/NoPage.html":
            res.writeHead(200, { "Content-type": "text/html" });
            break;
        case "Html/Eredeti.html":
            res.writeHead(200, { "Content-type": "text/html" });
            break;
            
       }
      res.end(content);
    }
  });
});

  server.listen(port, ip2, () => {
    console.log("Listening on " + ip2 + ":" + port);
  });

//192.168.0.108
//109.105.23.83

