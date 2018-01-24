const express = require('express');
const app = express();

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// GrapqhQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'Hello World!'
};

// GraphQL endpoint
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => console.log('server on port 3000'));
