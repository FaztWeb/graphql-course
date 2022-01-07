const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const resolvers = () => {
  const message = () => {
    return "Hello World";
  };
  return {
    message,
  };
};

// execute the query:

graphql({
  schema,
  rootValue: resolvers(),
  source: "{message}",
}).then((response) => {
  console.log(response);
});
