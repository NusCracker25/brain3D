const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

//static jwt token but it should be generated on user login: cf website  brain be project (routes/users.js)
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJ' +
  'lYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg';

  //use of standard middlewares CORS, static and so: defulat middleward from json
server.use(middlewares);

//let's parse the incoming JSON request
server.use(bodyParser.json());

server.post('/sign-in', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("sig in with "+req);
    //if id and password are matching, then we send back the token
    if(username === 'demo' && password === 'demo') {
      res.json({
        name: username,
        token: jwtToken
      });
      return;
    }
    //otherwise user is informed about the failure
    res.status(422).send('Invalid username and password');
    return;
  });

  //all other routes are protected
  // Protect other routes
server.use((req, res, next) => {
    if (isAuthorized(req)) {
      console.log('Access granted');
      next();
    } else {
      console.log('Access denied, invalid JWT');
      res.sendStatus(401);
      return;
    }
  });
  
  // Check whether request is allowed
  function isAuthorized(req) {
    let bearer = req.get('Authorization');
    if (bearer === 'Bearer ' + jwtToken) {
      return true;
    }
    return false;
  }

  // API routes
server.use(router);

// Start server
server.listen(3000, () => {
  console.log('JSON Server is running');
});
