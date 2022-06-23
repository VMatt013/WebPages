const http = require("http");
const url = require("url");
const fs = require("fs");
let date_ob = new Date();
const ip = '192.168.0.108';
const port = 3000;


const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  if (path == "") {
    path = "Index.html";
  }

  let H = date_ob.getHours();
  let M = date_ob.getMinutes();
  //let seconds = date_ob.getSeconds();

  console.log("\x1b[33m" + H+':'+M + " On " + ip+':'+port + ` REQUESTED path ${path} ` + "\x1b[0m");

  let file = path;
  fs.readFile(file, function(err, content) {
    if (err) {
      console.log("\x1b[31m" + H+':'+M + " On " +ip+':'+port + ` File Not Found ${file}`+"\x1b[0m");
      fs.readFile('Html/NoPage.html', function(err, content){
        if (err) {
          console.log("\x1b[31m" + H+':'+M + "  On " +ip+':'+port + ' File Not Found Html/NoPage.html '+"\x1b[0m");
          res.writeHead(404);
        }
        else
        {
          console.log("\x1b[32m" + H+':'+M + '  On ' + ip + ':' + port + ` RETURNING Html/NoPage.html`+"\x1b[0m");
          res.writeHead(404,{ "Content-type": "text/html" });
        }
        res.end(content);
      });

    } else {
      console.log("\x1b[32m" + H+':'+M + ' On ' + ip + ':' + port + ` RETURNING ${path}`+"\x1b[0m");
      res.setHeader("X-Content-Type-Options", "nosniff");

      switch (path.slice(-4)) {
        case ".css":
           res.writeHead(200, { "Content-type": "text/css" });
          break;
        case "html":
            res.writeHead(200, { "Content-type": "text/html" });
            console.log("---");
            break;            
       }
      res.end(content);
    }
  });
});

  server.listen(port, ip, () => {
    console.log("Listening on " + ip + ":" + port);
  });

