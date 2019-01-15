const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname,'db.json'));
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

//static jwt token but it should be generated on user login: cf website  brain be project (routes/users.js)
const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJ' +
  'lYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg';


//use of standard middlewares CORS, static and so: defulat middleward from json
server.use(middlewares);

//let's parse the incoming JSON request
server.use(bodyParser.json());

server.post("/auth", (req, res) => {
  const appid = req.body.appid;
  const appkey = req.body.appkey;
  console.log("sign in with " + req.body.username);
  //if id and password are matching, then we send back the token
  if (appid === "mm3d" && appkey === "123456") {
    res.json({
      token: jwtToken
    });
    console.log('App '+ appid + ' can now send request to back-end server.');
    return;
  }
  //otherwise user is informed about the failure
  res.status(422).send("App could not authenticated");
  return;
});


//all other routes are protected
// Protect other routes
server.use((req, res, next) => {
  // console.log('request received '+JSON.stringify(req));
  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
    return;
  }
});

// Check whether request is allowed
function isAuthorized(req) {
  if (req.headers.authorization === undefined) {
    console.log('Access denied. No authorization.');
    return false;
  }
  let bearer = req.headers.authorization.split(" ")[1];
  if (bearer === jwtToken) {
    console.log("Access granted with " + bearer);
    return true;
  }
  console.log('Access denied.');
  return false;
}


// API routes
server.use(router);

// Start server
server.listen(3000, () => {
  console.log("JSON Server is running");
});
