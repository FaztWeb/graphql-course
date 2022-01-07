const { buildSchema,graphql } = require('graphql')

const schema = buildSchema(`
  type Query {
    greeting(name: String): String
  }
`)

const resolvers = () => {
  const greeting = (args) => {
    return `Hello ${args.name}`
  }
  return {
    greeting
  }
}

const executeQuery = async () => {
  const result = await graphql({schema, rootValue: resolvers(), source: '{greeting(name: "fazt")}'})
  console.log(result)
}

executeQuery()