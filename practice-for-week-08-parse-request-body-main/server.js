const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require("http");
server = http.createServer((req, res) => {
  //   console.log(req);
  let reqBody = "";
  req.on("data", (data) => {
    // console.log(`this is data ${data}`);
    reqBody += data;
  });

  req.on("end", () => {
    console.log(reqBody);
    parseBody(reqBody);
    sendFormPage(req, res);
  });
  //   console.log(req.method, req.url);
  //   res.setHeader("content-type", "text/html");
  //   res.write("<p>wassup</p>");
  //   res.end();
});
server.listen(5001, () => {
  console.log("Successfully started the server on port 5001");
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
