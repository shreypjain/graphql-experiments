var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var ip = require('ip');

var schema = buildSchema(`
  type Query {
    hello: String
  }
  type Shrey {
    name: String,
    age: Number
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, ip.address(), () => console.log('Now browse to' + ip.address() + ':4000/graphql'));